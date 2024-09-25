// Button name mapping per device type
const buttonNameMapping = {
    "TV": {
        // Power
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

        // Volume Up
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

        // Volume Down
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

        // Channel Next
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

        // Channel Previous
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

        // Mute
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
    },
    "Audio": {
        // Power
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

        // Volume Up
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

        // Volume Down
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

        // Next
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

        // Previous
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

        // Play
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

        // Pause
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

        // Mute
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
    },
    "AC": {
        // Off
        "off": "Off",
        "of": "Off",
        "power": "Off",
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

        // Dehumidify
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
        "wtr(?:_)?rmv": "Dh",

        // Cool High
        "cool(?:_)?hi": "Cool_hi",
        "ch": "Cool_hi",
        "cool(?:_)?high": "Cool_hi",
        "high(?:_)?cool": "Cool_hi",
        "hi(?:_)?cool": "Cool_hi",
        "max(?:_)?cool": "Cool_hi",
        "cool(?:_)?max": "Cool_hi",
        "strong(?:_)?cool": "Cool_hi",
        "str(?:_)?cool": "Cool_hi",

        // Cool Low
        "cool(?:_)?lo": "Cool_lo",
        "cl": "Cool_lo",
        "cool(?:_)?low": "Cool_lo",
        "low(?:_)?cool": "Cool_lo",
        "min(?:_)?cool": "Cool_lo",
        "cool(?:_)?min": "Cool_lo",
        "gentle(?:_)?cool": "Cool_lo",
        "gnt(?:_)?cool": "Cool_lo",

        // Heat High
        "heat(?:_)?hi": "Heat_hi",
        "hh": "Heat_hi",
        "heat(?:_)?high": "Heat_hi",
        "high(?:_)?heat": "Heat_hi",
        "hi(?:_)?heat": "Heat_hi",
        "max(?:_)?heat": "Heat_hi",
        "heat(?:_)?max": "Heat_hi",
        "strong(?:_)?heat": "Heat_hi",
        "str(?:_)?heat": "Heat_hi",

        // Heat Low
        "heat(?:_)?lo": "Heat_lo",
        "hl": "Heat_lo",
        "heat(?:_)?low": "Heat_lo",
        "low(?:_)?heat": "Heat_lo",
        "min(?:_)?heat": "Heat_lo",
        "heat(?:_)?min": "Heat_lo",
        "gentle(?:_)?heat": "Heat_lo",
        "gnt(?:_)?heat": "Heat_lo",
    }
};

// Function to get device type key
function getDeviceTypeKey(selectedDeviceType) {
    const deviceTypeMapping = {
        // TVs and related devices
        "TV": "TV",
        "Projector": "TV",
        "Monitor": "TV",
        "Set-Top Box": "TV",
        "Cable Box": "TV",
        "Satellite Receiver": "TV",
        "Streaming Device": "TV",
        "TV Tuner": "TV",
        "DVB-T": "TV",

        // Audio devices
        "Audio and Video Receiver": "Audio",
        "Soundbar": "Audio",
        "Home Theater": "Audio",
        "DVD Player": "Audio",
        "Blu-ray Player": "Audio",
        "CD Player": "Audio",
        "MiniDisc Player": "Audio",
        "VCR": "Audio",
        "Laserdisc Player": "Audio",

        // Air Conditioners
        "AC": "AC",
        "Air Conditioner": "AC",

        // Default to TV if not found
    };
    return deviceTypeMapping[selectedDeviceType] || "TV"; // Default to "TV"
}

// Function to normalize button names based on device type
function normalizeButtonName(buttonName, deviceTypeKey) {
    let mapping = buttonNameMapping[deviceTypeKey];
    if (!mapping) {
        mapping = {}; // Default to empty mapping
    }
    let cleanedName = buttonName.toLowerCase().replace(/[_\-\s]/g, "");
    for (const pattern in mapping) {
        if (new RegExp(`^${pattern}$`).test(cleanedName)) {
            return mapping[pattern];
        }
    }
    return buttonName; // Return original name if no mapping found
}

// Parse IR file content into data structure
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
            currentButton['name'] = userButtonName;
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

// Create IR content with normalized button names and a single comment line
function createIRContent(irData, brand, model, deviceType, deviceModel = "", deviceTypeKey, deviceLink = "", deviceDescription = "") {
    let content = `Filetype: IR signals file\nVersion: 1\n#\n`;

    // Concatenate all additional information into one long comment line
    let infoItems = [
        brand ? `Brand: ${brand}` : "",
        model ? `Remote Model: ${model}` : "",
        deviceModel ? `Device Model: ${deviceModel}` : "",
        deviceType ? `Device Type: ${deviceType}` : "",
        deviceLink ? `Link: ${deviceLink}` : "",
        deviceDescription ? `Description: ${deviceDescription}` : ""
    ].filter(item => item).join(", ");

    // Add the single comment line
    content += `# ${infoItems}\n#\n`;

    irData.forEach(button => {
        const normalizedButtonName = normalizeButtonName(button.name, deviceTypeKey);
        content += `name: ${normalizedButtonName}\n`;
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

function processIRFile() {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a .ir file.");
        return;
    }

    const brand = document.getElementById("brand").value.trim();
    const remoteModel = document.getElementById("remote-model").value.trim();
    const deviceModel = document.getElementById("device-model").value.trim();
    const deviceType = document.getElementById("device-type").value;
    const deviceTypeKey = getDeviceTypeKey(deviceType);
    const deviceLink = document.getElementById("device-link").value.trim();
    const deviceDescription = document.getElementById("device-description").value.trim();

    if (!brand || !deviceModel || !deviceType) {
        alert("Please enter brand, device model, and select a device type.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const irData = parseIRFile(fileContent);
        const processedContent = createIRContent(
            irData,
            brand,
            remoteModel,
            deviceType,
            deviceModel,
            deviceTypeKey,
            deviceLink,
            deviceDescription
        );
        const filename = `${brand}_${deviceModel}.ir`;  // Updated filename
        downloadFile(processedContent, filename);
    };

    reader.readAsText(file);
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// DOM Elements and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const fileInput = document.getElementById('file-input');
    const processButton = document.getElementById('process-btn');

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

        body.classList.remove(currentTheme);
        body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
    });

    // File conversion
    processButton.addEventListener('click', processIRFile);

    // Update file input label
    fileInput.addEventListener('change', (event) => {
        const fileName = event.target.files[0]?.name || 'Choose a file...';
        fileInput.nextElementSibling.textContent = fileName;
    });
});

// Update button text based on the current theme
function updateButtonText(theme) {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    themeToggleButton.textContent = theme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}