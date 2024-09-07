const buttonNameMapping = {
    // Power buttons
    "power": "Power",
    "pwr": "Power",

    // Volume Up buttons
    "vol(?:_)?up": "Vol_up",
    "volume(?:_)?up": "Vol_up",
    "vol(?:_)?increase": "Vol_up",
    "vol(?:_)?inc": "Vol_up",
    "vol(?:_)?\\+": "Vol_up",

    // Volume Down buttons (including vol_dwn -> vol_dn)
    "vol(?:_)?down": "Vol_dn",
    "volume(?:_)?down": "Vol_dn",
    "vol(?:_)?decrease": "Vol_dn",
    "vol(?:_)?dec": "Vol_dn",
    "vol(?:_)?dwn": "Vol_dn",   // Handle vol_dwn case
    "vol(?:_)?\\-": "Vol_dn",

    // Channel Up buttons
    "ch(?:_)?up": "Ch_next",
    "channel(?:_)?up": "Ch_next",
    "ch(?:_)?next": "Ch_next",

    // Channel Down buttons
    "ch(?:_)?down": "Ch_prev",
    "channel(?:_)?down": "Ch_prev",
    "ch(?:_)?prev": "Ch_prev",

    // Mute buttons
    "mute": "Mute",
    "silence": "Mute",

    // Play buttons
    "play": "Play",

    // Pause buttons
    "pause": "Pause",
    "hold": "Pause",

    // Next buttons
    "next": "Next",
    "skip(?:_)?fwd": "Next",
    "forward": "Next",

    // Previous buttons
    "prev(?:ious)?": "Prev",
    "skip(?:_)?back": "Prev",
    "rewind": "Prev",

    // Power Off buttons
    "off": "Off",
    "shutdown": "Off",
    "shut(?:_)?down": "Off",

    // Air Conditioner Modes
    "cool(?:_)?hi": "Cool_hi",
    "cool(?:_)?lo": "Cool_lo",
    "heat(?:_)?hi": "Heat_hi",
    "heat(?:_)?lo": "Heat_lo",

    // Dehumidifier Modes
    "dh": "Dh",
    "dehumidify": "Dh",
    "dry": "Dh"
};

// DOM Elements
const body = document.body;
const themeToggleButton = document.getElementById('theme-toggle-button');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
    updateButtonText(savedTheme);
}

// Toggle between light and dark modes
themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    // Apply the new theme
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);

    // Update the button text
    updateButtonText(newTheme);
});

// Update button text based on the current theme
function updateButtonText(theme) {
    if (theme === 'dark-mode') {
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
}


/**
 * Normalize button names by cleaning up and mapping them to standard names.
 * For example: 'vol_dwn' -> 'Vol_dn', 'vol_up' -> 'Vol_up'.
 */
function normalizeButtonName(buttonName) {
    let cleanedName = buttonName.toLowerCase().replace(/[_\-\s]/g, ""); // remove underscores, hyphens, and spaces
    for (const pattern in buttonNameMapping) {
        if (new RegExp(pattern).test(cleanedName)) {
            return buttonNameMapping[pattern]; // return normalized name if matched
        }
    }
    return buttonName; // if no match, return original button name
}

/**
 * Process the selected IR file.
 */
function processIRFile() {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a .ir file.");
        return;
    }

    const brand = document.getElementById("brand").value.trim();
    const remoteModel = document.getElementById("remote-model").value.trim();

    if (!brand || !remoteModel) {
        alert("Please enter both brand and remote model.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const irData = parseIRFile(fileContent);
        const processedContent = createIRContent(irData);
        const filename = `${brand}_${remoteModel}.ir`;  // Set the filename format as BRAND_REMOTEMODEL.ir
        downloadFile(processedContent, filename);
    };

    reader.readAsText(file);
}

/**
 * Parse the contents of the .ir file and return structured data.
 */
function parseIRFile(content) {
    const lines = content.split('\n');
    const irData = [];
    let currentButton = {};

    lines.forEach((line) => {
        line = line.trim();
        if (line.startsWith('name:')) {
            if (Object.keys(currentButton).length) {
                irData.push(currentButton);
                currentButton = {};
            }
            const userButtonName = line.split(': ')[1];
            currentButton['name'] = normalizeButtonName(userButtonName);
        } else if (line.startsWith('type:')) {
            currentButton['type'] = line.split(': ')[1];
        } else if (line.startsWith('protocol:')) {
            currentButton['protocol'] = line.split(': ')[1];
        } else if (line.startsWith('address:')) {
            currentButton['address'] = line.split(': ')[1];
        } else if (line.startsWith('command:')) {
            currentButton['command'] = line.split(': ')[1];
        } else if (line.startsWith('frequency:')) {
            currentButton['frequency'] = line.split(': ')[1];
        } else if (line.startsWith('duty_cycle:')) {
            currentButton['duty_cycle'] = line.split(': ')[1];
        } else if (line.startsWith('data:')) {
            currentButton['data'] = line.split(': ')[1];
        }
    });

    if (Object.keys(currentButton).length) {
        irData.push(currentButton);
    }

    return irData;
}

/**
 * Create the IR file content with the formatted button names and structured data.
 */
function createIRContent(irData) {
    const brand = document.getElementById("brand").value;
    const remoteModel = document.getElementById("remote-model").value;
    const deviceModel = document.getElementById("device-model").value;
    let content = `Filetype: IR signals file\nVersion: 1\n#\n# ${brand} ${remoteModel} ${deviceModel}\n#\n`;

    irData.forEach(button => {
        content += `name: ${button.name}\n`;
        content += `type: ${button.type}\n`;
        if (button.type === "parsed") {
            content += `protocol: ${button.protocol}\n`;
            content += `address: ${button.address}\n`;
            content += `command: ${button.command}\n`;
        } else if (button.type === "raw") {
            content += `frequency: ${button.frequency}\n`;
            content += `duty_cycle: ${button.duty_cycle}\n`;
            content += `data: ${button.data}\n`;
        }
        content += "#\n";
    });

    return content;
}

/**
 * Trigger the download of the processed IR file.
 */
function downloadFile(content, filename) {
    const blob = new Blob([content], { type: "text/plain" });
    
    // Create a link element
    const link = document.createElement("a");
    
    // Create a URL for the Blob and set it as the href attribute of the link
    link.href = URL.createObjectURL(blob);
    
    // Set the download attribute to the desired filename
    link.download = filename;
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document after triggering the download
    document.body.removeChild(link);
}
