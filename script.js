const buttonNameMapping = {
    // TV Buttons
    "power": "Power",
    "pwr": "Power",
    "pw": "Power",
    "p": "Power",
    "on(?:_)?off": "Power",
    "on/off": "Power",
    "standby": "Power",
    "stby": "Power",
    "switch": "Power",
    "sw": "Power",
    "toggle": "Power",
    "tgl": "Power",
    "powr": "Power",

    "vol(?:_)?up": "Vol_up",
    "v(?:_)?up": "Vol_up",
    "v(?:_)?\\+": "Vol_up",
    "vu": "Vol_up",
    "volume(?:_)?up": "Vol_up",
    "vol(?:_)?increase": "Vol_up",
    "vol(?:_)?inc": "Vol_up",
    "vol(?:_)?\\+": "Vol_up",
    "v\\+": "Vol_up",
    "louder": "Vol_up",
    "volume(?:_)?raise": "Vol_up",
    "audio(?:_)?up": "Vol_up",
    "au(?:_)?up": "Vol_up",

    "vol(?:_)?down": "Vol_dn",
    "vol(?:_)?dn": "Vol_dn",
    "v(?:_)?down": "Vol_dn",
    "v(?:_)?dn": "Vol_dn",
    "v(?:_)?\\-": "Vol_dn",
    "vd": "Vol_dn",
    "volume(?:_)?down": "Vol_dn",
    "vol(?:_)?decrease": "Vol_dn",
    "vol(?:_)?dec": "Vol_dn",
    "vol(?:_)?dwn": "Vol_dn",
    "vol(?:_)?\\-": "Vol_dn",
    "v\\-": "Vol_dn",
    "softer": "Vol_dn",
    "volume(?:_)?lower": "Vol_dn",
    "audio(?:_)?down": "Vol_dn",
    "au(?:_)?dn": "Vol_dn",

    "ch(?:_)?up": "Ch_next",
    "ch(?:_)?\\+": "Ch_next",
    "c(?:_)?up": "Ch_next",
    "c\\+": "Ch_next",
    "cu": "Ch_next",
    "channel(?:_)?up": "Ch_next",
    "ch(?:_)?next": "Ch_next",
    "next(?:_)?channel": "Ch_next",
    "channel(?:_)?forward": "Ch_next",
    "ch(?:_)?fwd": "Ch_next",
    "prog(?:_)?up": "Ch_next",
    "program(?:_)?up": "Ch_next",
    "p(?:_)?up": "Ch_next",
    "pu": "Ch_next",

    "ch(?:_)?down": "Ch_prev",
    "ch(?:_)?dn": "Ch_prev",
    "ch(?:_)?\\-": "Ch_prev",
    "c(?:_)?down": "Ch_prev",
    "c(?:_)?dn": "Ch_prev",
    "c\\-": "Ch_prev",
    "cd": "Ch_prev",
    "channel(?:_)?down": "Ch_prev",
    "ch(?:_)?prev": "Ch_prev",
    "previous(?:_)?channel": "Ch_prev",
    "channel(?:_)?back": "Ch_prev",
    "ch(?:_)?bk": "Ch_prev",
    "prog(?:_)?down": "Ch_prev",
    "program(?:_)?down": "Ch_prev",
    "p(?:_)?down": "Ch_prev",
    "p(?:_)?dn": "Ch_prev",
    "pd": "Ch_prev",

    "mute": "Mute",
    "mu": "Mute",
    "mt": "Mute",
    "silence": "Mute",
    "sil": "Mute",
    "quiet": "Mute",
    "qt": "Mute",
    "audio(?:_)?off": "Mute",
    "sound(?:_)?off": "Mute",
    "no(?:_)?sound": "Mute",
    "mte": "Mute",

    // Audio Device Buttons
    // Note: Power, Vol_up, Vol_dn, and Mute are shared with TV
    "next": "Next",
    "nxt": "Next",
    "nx": "Next",
    "n": "Next",
    "skip(?:_)?fwd": "Next",
    "sk(?:_)?f": "Next",
    "forward": "Next",
    "fwd": "Next",
    "ff": "Next",
    "fast(?:_)?forward": "Next",
    "track(?:_)?forward": "Next",
    "tr(?:_)?fwd": "Next",
    "next(?:_)?track": "Next",
    "skip(?:_)?ahead": "Next",

    "prev(?:ious)?": "Prev",
    "prv": "Prev",
    "pr": "Prev",
    "skip(?:_)?back": "Prev",
    "sk(?:_)?b": "Prev",
    "rewind": "Prev",
    "rew": "Prev",
    "rw": "Prev",
    "back": "Prev",
    "bk": "Prev",
    "track(?:_)?back": "Prev",
    "tr(?:_)?bk": "Prev",
    "previous(?:_)?track": "Prev",
    "skip(?:_)?previous": "Prev",

    "play": "Play",
    "pl": "Play",
    "ply": "Play",
    "start": "Play",
    "strt": "Play",
    "resume": "Play",
    "rsm": "Play",
    "begin": "Play",
    "bgn": "Play",
    "playback": "Play",
    "pb": "Play",

    "pause": "Pause",
    "pse": "Pause",
    "ps": "Pause",
    "hold": "Pause",
    "hld": "Pause",
    "stop": "Pause",
    "stp": "Pause",
    "freeze": "Pause",
    "frz": "Pause",
    "suspend": "Pause",
    "spnd": "Pause",
    "break": "Pause",
    "brk": "Pause",

    // AC Buttons
    "off": "Off",
    "of": "Off",
    "shutdown": "Off",
    "shtdwn": "Off",
    "shut(?:_)?down": "Off",
    "power(?:_)?off": "Off",
    "pwr(?:_)?off": "Off",
    "pw(?:_)?off": "Off",
    "p(?:_)?off": "Off",
    "turn(?:_)?off": "Off",
    "switch(?:_)?off": "Off",
    "sw(?:_)?off": "Off",

    "cool(?:_)?hi": "Cool_hi",
    "ch": "Cool_hi",
    "cool(?:_)?high": "Cool_hi",
    "high(?:_)?cool": "Cool_hi",
    "hi(?:_)?cool": "Cool_hi",
    "max(?:_)?cool": "Cool_hi",
    "cool(?:_)?max": "Cool_hi",
    "strong(?:_)?cool": "Cool_hi",
    "str(?:_)?cool": "Cool_hi",

    "cool(?:_)?lo": "Cool_lo",
    "cl": "Cool_lo",
    "cool(?:_)?low": "Cool_lo",
    "low(?:_)?cool": "Cool_lo",
    "min(?:_)?cool": "Cool_lo",
    "cool(?:_)?min": "Cool_lo",
    "gentle(?:_)?cool": "Cool_lo",
    "gnt(?:_)?cool": "Cool_lo",

    "heat(?:_)?hi": "Heat_hi",
    "hh": "Heat_hi",
    "heat(?:_)?high": "Heat_hi",
    "high(?:_)?heat": "Heat_hi",
    "hi(?:_)?heat": "Heat_hi",
    "max(?:_)?heat": "Heat_hi",
    "heat(?:_)?max": "Heat_hi",
    "strong(?:_)?heat": "Heat_hi",
    "str(?:_)?heat": "Heat_hi",

    "heat(?:_)?lo": "Heat_lo",
    "hl": "Heat_lo",
    "heat(?:_)?low": "Heat_lo",
    "low(?:_)?heat": "Heat_lo",
    "min(?:_)?heat": "Heat_lo",
    "heat(?:_)?min": "Heat_lo",
    "gentle(?:_)?heat": "Heat_lo",
    "gnt(?:_)?heat": "Heat_lo",

    "dh": "Dh",
    "dehumidify": "Dh",
    "dehum": "Dh",
    "dhum": "Dh",
    "dry": "Dh",
    "dehumid": "Dh",
    "moisture(?:_)?remove": "Dh",
    "mst(?:_)?rmv": "Dh",
    "humidity(?:_)?control": "Dh",
    "hum(?:_)?ctrl": "Dh",
    "water(?:_)?remove": "Dh",
    "wtr(?:_)?rmv": "Dh"
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
