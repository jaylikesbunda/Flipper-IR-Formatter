// Button name mapping per device type.
// This mapping is used to normalize various button names to standard names for different device types.
const buttonNameMapping = {
    "TV": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "pover": "Power",
        "powe": "Power",
        "pw": "Power",
        "p": "Power",

        // On
        "turnon": "On",
        "poweron": "On",
        "start": "On",
        "trnon": "On",
        "pwron": "On",
        "strt": "On",

        // Off
        "turnoff": "Off",
        "poweroff": "Off",
        "shutdown": "Off",
        "trnoff": "Off",
        "pwroff": "Off",
        "shtdwn": "Off",

        // Vol_up
        "volumeup": "Vol_up",
        "vol\\+": "Vol_up",
        "louder": "Vol_up",
        "audioup": "Vol_up",
        "volup": "Vol_up",
        "vol\\^": "Vol_up",
        "v\\+": "Vol_up",

        // Vol_dn
        "volumedown": "Vol_dn",
        "vol\\-": "Vol_dn",
        "quieter": "Vol_dn",
        "audiodown": "Vol_dn",
        "voldwn": "Vol_dn",
        "voldn": "Vol_dn",
        "voldown": "Vol_dn",
        "v\\-": "Vol_dn",

        // Ch_next
        "channelup": "Ch_next",
        "ch\\+": "Ch_next",
        "prog\\+": "Ch_next",
        "tuneup": "Ch_next",
        "chnlup": "Ch_next",
        "ch\\^": "Ch_next",
        "c\\+": "Ch_next",
        "chan\\+": "Ch_next",

        // Ch_prev
        "channeldown": "Ch_prev",
        "ch\\-": "Ch_prev",
        "prog\\-": "Ch_prev",
        "tunedown": "Ch_prev",
        "chnldwn": "Ch_prev",
        "chdn": "Ch_prev",
        "c\\-": "Ch_prev",
        "chan\\-": "Ch_prev",

        // Mute
        "mutetoggle": "Mute",
        "silent": "Mute",
        "audiomute": "Mute",
        "mut": "Mute",
        "slnt": "Mute",
        "mte": "Mute",

        // Source
        "input": "Source",
        "tvav": "Source",
        "mode": "Source",
        "signal": "Source",
        "src": "Source",
        "inpt": "Source",

        // Menu
        "home": "Menu",
        "smarthub": "Menu",
        "settings": "Menu",
        "mnu": "Menu",
        "stngs": "Menu",
        "hme": "Menu",

        // Exit
        "back": "Exit",
        "return": "Exit",
        "close": "Exit",
        "ext": "Exit",
        "bck": "Exit",
        "rtrn": "Exit",
        "cls": "Exit",

        // Up
        "arrowup": "Up",
        "navigateup": "Up",
        "u": "Up",
        "\\^": "Up",
        "navup": "Up",

        // Down
        "arrowdown": "Down",
        "navigatedown": "Down",
        "d": "Down",
        "v": "Down",
        "arrowdn": "Down",
        "navdwn": "Down",

        // Left
        "arrowleft": "Left",
        "navigateleft": "Left",
        "l": "Left",
        "<": "Left",
        "arrowlft": "Left",
        "navlft": "Left",

        // Right
        "arrowright": "Right",
        "navigateright": "Right",
        "r": "Right",
        ">": "Right",
        "arrowrgt": "Right",
        "navrgt": "Right",

        // Ok
        "enter": "Ok",
        "select": "Ok",
        "confirm": "Ok",
        "entr": "Ok",
        "slct": "Ok",
        "cnfrm": "Ok",
    },
    "Audio": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "pover": "Power",
        "powe": "Power",
        "pw": "Power",
        "p": "Power",

        // On
        "turnon": "On",
        "poweron": "On",
        "start": "On",
        "trnon": "On",
        "pwron": "On",
        "strt": "On",

        // Off
        "turnoff": "Off",
        "poweroff": "Off",
        "shutdown": "Off",
        "trnoff": "Off",
        "pwroff": "Off",
        "shtdwn": "Off",

        // Vol_up
        "volumeup": "Vol_up",
        "vol\\+": "Vol_up",
        "louder": "Vol_up",
        "audioup": "Vol_up",
        "volup": "Vol_up",
        "vol\\^": "Vol_up",
        "v\\+": "Vol_up",

        // Vol_dn
        "volumedown": "Vol_dn",
        "vol\\-": "Vol_dn",
        "quieter": "Vol_dn",
        "audiodown": "Vol_dn",
        "voldwn": "Vol_dn",
        "voldn": "Vol_dn",
        "voldown": "Vol_dn",
        "v\\-": "Vol_dn",

        // Next
        "tracknext": "Next",
        "skipforward": "Next",
        "fastforward": "Next",
        "nxt": "Next",
        "skpfwd": "Next",
        "ff": "Next",

        // Prev
        "trackprev": "Prev",
        "skipbackward": "Prev",
        "rewind": "Prev",
        "prv": "Prev",
        "skpbck": "Prev",
        "rwd": "Prev",

        // Play
        "startplayback": "Play",
        "resume": "Play",
        "ply": "Play",
        "strtplybck": "Play",
        "rsm": "Play",
        "play": "Play",

        // Pause
        "pauseplayback": "Pause",
        "break": "Pause",
        "paus": "Pause",
        "pse": "Pause",
        "brk": "Pause",
        "pause": "Pause",

        // Stop
        "endplayback": "Stop",
        "halt": "Stop",
        "stp": "Stop",
        "endplybck": "Stop",
        "hlt": "Stop",
        "stop": "Stop",

        // Mute
        "mutetoggle": "Mute",
        "silent": "Mute",
        "audiomute": "Mute",
        "mut": "Mute",
        "slnt": "Mute",
        "mte": "Mute",

        // Source
        "input": "Source",
        "mode": "Source",
        "function": "Source",
        "src": "Source",
        "inpt": "Source",
        "fnc": "Source",

        // Bass
        "bassadjust": "Bass",
        "lowfreq": "Bass",
        "bas": "Bass",
        "lofrq": "Bass",

        // Treble
        "trebleadjust": "Treble",
        "highfreq": "Treble",
        "trbl": "Treble",
        "hifrq": "Treble",

        // EQ
        "equalizer": "EQ",
        "soundmode": "EQ",
        "audiopreset": "EQ",
        "eq": "EQ",
        "sndmode": "EQ",
        "audprst": "EQ",
    },
    "AC": {
        // Power (Off)
        "off": "Off",
        "turnoff": "Off",
        "poweroff": "Off",
        "shutdown": "Off",
        "trnoff": "Off",
        "pwroff": "Off",
        "shtdwn": "Off",

        // Cool High
        "coolhi": "Cool_hi",
        "coolhigh": "Cool_hi",
        "maxcool": "Cool_hi",
        "coolmax": "Cool_hi",
        "strongcool": "Cool_hi",
        "strcool": "Cool_hi",

        // Cool Low
        "coollo": "Cool_lo",
        "coollow": "Cool_lo",
        "mincool": "Cool_lo",
        "coolmin": "Cool_lo",
        "gentlecool": "Cool_lo",
        "gntcool": "Cool_lo",

        // Heat High
        "heathi": "Heat_hi",
        "heathigh": "Heat_hi",
        "maxheat": "Heat_hi",
        "heatmax": "Heat_hi",
        "strongheat": "Heat_hi",
        "strheat": "Heat_hi",

        // Heat Low
        "heatlo": "Heat_lo",
        "heatlow": "Heat_lo",
        "minheat": "Heat_lo",
        "heatmin": "Heat_lo",
        "gentleheat": "Heat_lo",
        "gntheat": "Heat_lo",

        // Dehumidify
        "dehumidify": "Dh",
        "dehum": "Dh",
        "drymode": "Dh",
        "moistureremove": "Dh",
        "dehumid": "Dh",
        "drymd": "Dh",
        "moistrmv": "Dh",
    },
    "Fan": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "pover": "Power",
        "powe": "Power",
        "pw": "Power",
        "p": "Power",

        // Speed Up
        "faster": "Speed_up",
        "increasespeed": "Speed_up",
        "windup": "Speed_up",
        "spdup": "Speed_up",
        "incspd": "Speed_up",
        "wind\\^": "Speed_up",

        // Speed Down
        "slower": "Speed_dn",
        "decreasespeed": "Speed_dn",
        "winddown": "Speed_dn",
        "spddn": "Speed_dn",
        "decspd": "Speed_dn",
        "windv": "Speed_dn",

        // Mode
        "function": "Mode",
        "airflow": "Mode",
        "fanmode": "Mode",
        "mod": "Mode",
        "fnc": "Mode",
        "airflw": "Mode",

        // Rotate
        "oscillate": "Rotate",
        "swing": "Rotate",
        "scan": "Rotate",
        "rot": "Rotate",
        "osc": "Rotate",
        "swng": "Rotate",

        // Timer
        "autooff": "Timer",
        "schedule": "Timer",
        "delayoff": "Timer",
        "tmr": "Timer",
        "autoof": "Timer",
        "sched": "Timer",

        // Natural
        "naturalwind": "Nat",
        "breeze": "Nat",
        "simulate": "Nat",
        "natrl": "Nat",
        "brz": "Nat",
        "sim": "Nat",

        // Humidify
        "humidify": "Humid",
        "mist": "Humid",
        "vapor": "Humid",
        "hum": "Humid",
        "mst": "Humid",
        "vpr": "Humid",
    },
    "LED": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "pover": "Power",
        "powe": "Power",
        "pw": "Power",
        "p": "Power",

        // Brightness Up
        "brightnessup": "Bright+",
        "brighter": "Bright+",
        "intensify": "Bright+",
        "brt\\+": "Bright+",
        "brghtup": "Bright+",
        "intnsfy": "Bright+",

        // Brightness Down
        "brightnessdown": "Bright-",
        "dimmer": "Bright-",
        "soften": "Bright-",
        "brt\\-": "Bright-",
        "brghtdn": "Bright-",
        "sftn": "Bright-",

        // Color
        "colorchange": "Color",
        "hue": "Color",
        "tint": "Color",
        "clr": "Color",
        "huechng": "Color",
        "tnt": "Color",

        // Tone
        "temperature": "Tone",
        "warmth": "Tone",
        "kelvin": "Tone",
        "tmp": "Tone",
        "wrm": "Tone",
        "klvn": "Tone",

        // Effect
        "effect": "FX",
        "animate": "FX",
        "dynamic": "FX",
        "fx": "FX",
        "efct": "FX",
        "anim": "FX",

        // Sync
        "musicmode": "Sync",
        "rhythm": "Sync",
        "soundactive": "Sync",
        "sync": "Sync",
        "mscmd": "Sync",
        "rythm": "Sync",

        // Preset
        "scene": "Preset",
        "mode": "Preset",
        "theme": "Preset",
        "prst": "Preset",
        "scn": "Preset",
        "thm": "Preset",
    },
    "DigitalSigns": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "pover": "Power",
        "powe": "Power",
        "pw": "Power",
        "p": "Power",

        // Source
        "input": "Source",
        "inputselect": "Source",
        "mode": "Source",
        "src": "Source",
        "inptslct": "Source",
        "mod": "Source",

        // Play
        "startcontent": "Play",
        "run": "Play",
        "begin": "Play",
        "ply": "Play",
        "strtcntnt": "Play",
        "bgn": "Play",

        // Stop
        "endcontent": "Stop",
        "halt": "Stop",
        "stp": "Stop",
        "endcntnt": "Stop",
        "hlt": "Stop",

        // Schedule
        "schedule": "Sched",
        "timer": "Sched",
        "program": "Sched",
        "schd": "Sched",
        "tmr": "Sched",
        "prgm": "Sched",

        // Layout
        "displaymode": "Layout",
        "screenlayout": "Layout",
        "format": "Layout",
        "lyt": "Layout",
        "scrnlyt": "Layout",
        "frmt": "Layout",

        // Update
        "refresh": "Update",
        "synccontent": "Update",
        "reload": "Update",
        "updt": "Update",
        "rfsh": "Update",
        "synccntnt": "Update",

        // Zoom
        "scale": "Zoom",
        "resize": "Zoom",
        "magnify": "Zoom",
        "zm": "Zoom",
        "rsize": "Zoom",
        "mgnfy": "Zoom",

        // Lock
        "keypadlock": "Lock",
        "childlock": "Lock",
        "security": "Lock",
        "lck": "Lock",
        "chldlck": "Lock",
        "scrty": "Lock",
    },
    "DVD": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "on_off": "Power",

        // Eject
        "eject": "Eject",
        "open_close": "Eject",
        "disc": "Eject",
        "opn": "Eject",
        "ej": "Eject",
        "openclose": "Eject",

        // Playback controls
        "play": "Play",
        "ply": "Play",
        "start": "Play",
        "go": "Play",
        "pause": "Pause",
        "paus": "Pause",
        "pse": "Pause",
        "stop": "Stop",
        "stp": "Stop",
        "halt": "Stop",
        "fastforward": "Fast_fo",
        "fastbackward": "Fast_ba",
        "ff": "Fast_fo",
        "rew": "Fast_ba",
        "fwd": "Fast_fo",
        "rwd": "Fast_ba",
        "ffwd": "Fast_fo",
        "frwd": "Fast_ba",
        "next": "Next",
        "nxt": "Next",
        "skip_forward": "Next",
        "previous": "Prev",
        "prev": "Prev",
        "skip": "Next",
        "skipback": "Prev",
        "skip_back": "Prev",
        "back": "Prev",

        // Menu navigation
        "menu": "Menu",
        "disc_menu": "Menu",
        "root_menu": "Menu",
        "dvd_menu": "Menu",
        "mnu": "Menu",
        "top_menu": "Top_menu",
        "title_menu": "Top_menu",
        "main_menu": "Top_menu",
        "topmenu": "Top_menu",
        "ttl_menu": "Top_menu",
        "setup": "Setup",
        "settings": "Setup",
        "config": "Setup",
        "stp": "Setup",
        "home": "Home",
        "main": "Home",
        "hme": "Home",

        // Special functions
        "audio": "Audio",
        "sound_track": "Audio",
        "language": "Audio",
        "lang": "Audio",
        "aud": "Audio",
        "subtitle": "Subtitle",
        "subtitles": "Subtitle",
        "cc": "Subtitle",
        "captions": "Subtitle",
        "subs": "Subtitle",
        "sub": "Subtitle",
        "angle": "Angle",
        "camera_angle": "Angle",
        "cam": "Angle",
        "view": "Angle",
        "ang": "Angle",
        "zoom": "Zoom",
        "magnify": "Zoom",
        "zoomin": "Zoom",
        "zoomout": "Zoom",
        "zm": "Zoom",

        // Navigation
        "up": "Up",
        "down": "Down",
        "left": "Left",
        "right": "Right",
        "enter": "Ok",
        "select": "Ok",
        "ok": "Ok",
        "confirm": "Ok",
        "accept": "Ok",

        // Color buttons
        "red": "Red",
        "green": "Green",
        "yellow": "Yellow",
        "blue": "Blue",
        "r": "Red",
        "g": "Green",
        "y": "Yellow",
        "b": "Blue"
    },

    "Gaming": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "on_off": "Power",
        "switch": "Power",
        "toggle": "Power",

        // Navigation
        "up": "Up",
        "down": "Down",
        "left": "Left",
        "right": "Right",
        "start": "Start",
        "select": "Select",
        "options": "Options",
        "menu": "Menu",
        "home": "Home",

        // Action buttons
        "a": "A",
        "b": "B",
        "x": "X",
        "y": "Y",
        "square": "Square",
        "triangle": "Triangle",
        "circle": "Circle",
        "cross": "Cross",

        // Shoulder buttons
        "l1": "L1",
        "r1": "R1",
        "l2": "L2",
        "r2": "R2",
        "lb": "L1",
        "rb": "R1",
        "lt": "L2",
        "rt": "R2",

        // Special functions
        "share": "Share",
        "capture": "Capture",
        "touchpad": "Touchpad",
        "ps": "PS",
        "xbox": "Xbox"
    },

    "Streaming": {
        // Power
        "power": "Power",
        "pwr": "Power",
        "powr": "Power",
        "on_off": "Power",
        "switch": "Power",
        "toggle": "Power",

        // Navigation
        "up": "Up",
        "down": "Down",
        "left": "Left",
        "right": "Right",
        "select": "Ok",
        "ok": "Ok",
        "enter": "Ok",

        // Playback controls
        "play": "Play",
        "pause": "Pause",
        "playpause": "Play_pa",
        "stop": "Stop",
        "fastforward": "Fast_fo",
        "rewind": "Fast_ba",
        "ff": "Fast_fo",
        "rew": "Fast_ba",
        "next": "Next",
        "previous": "Prev",

        // Menu and UI
        "menu": "Menu",
        "home": "Home",
        "back": "Back",
        "return": "Back",

        // Volume controls
        "volumeup": "Vol_up",
        "volumedown": "Vol_dn",
        "mute": "Mute",

        // Special functions
        "search": "Search",
        "voice": "Voice",
        "mic": "Voice",

        // App shortcuts
        "netflix": "Netflix",
        "prime": "Prime",
        "hulu": "Hulu",
        "disney": "Disney",
        "youtube": "Youtube",
        "appstore": "Appstore"
    },
};

// Regular expression to clean button names.
const buttonNameCleanRegex = /[_\-\s\/]/g;

/**
 * Get the device type key used in the button name mapping.
 * Maps the selected device type to a standardized key.
 * Defaults to "TV" if the device type is not found in the mapping.
 *
 * @param {string} selectedDeviceType - The device type selected by the user.
 * @return {string} The device type key used in the button name mapping.
 */
function getDeviceTypeKey(selectedDeviceType) {
    const deviceTypeMapping = {
        // TVs and related devices
        "TV": "TV",
        "Projector": "TV",
        "Set-Top Box": "TV",
        "Cable Box": "TV",
        "Satellite Receiver": "TV",
        "TV Tuner": "TV",
        "DVB-T": "TV",
        "Universal TV Remote": "TV",

        // Audio devices
        "Audio and Video Receiver": "Audio",
        "Soundbar": "Audio",
        "Home Theater": "Audio",
        "CD Player": "Audio",
        "MiniDisc Player": "Audio",


        // DVD and Blu-ray players
        "DVD Player": "DVD",
        "Blu-ray Player": "DVD",
        "VCR": "DVD",
        "Laserdisc Player": "DVD",

        // Gaming devices
        "Gaming Console": "Gaming",

        // Streaming devices
        "Streaming Device": "Streaming",

        // Air Conditioners and Climate Control
        "AC": "AC",
        "Air Purifier": "AC",
        "Heater": "AC",
        "Humidifier": "AC",

        // Fans
        "Fan": "Fan",

        // LEDs and Lighting
        "Lights": "LED",
        "LED Lighting": "LED",

        // Monitors and Displays
        "Monitor": "Monitor",
        "Digital Sign": "DigitalSigns",
        "Touchscreen Display": "DigitalSigns",
        "Whiteboard": "DigitalSigns",

        // Smart Home and IoT devices
        "Smart Home": "TV",
        "Computer": "TV",
        "KVM": "TV",
        "Camera": "TV",
        "CCTV": "TV",
        "Car Multimedia": "TV",
        "Head Unit": "TV",
        "Videoconferencing": "TV",
        "Picture Frame": "TV",

        // Devices with limited controls (defaulting to TV for basic functions)
        "Vacuum Cleaner": "TV",
        "Window Cleaner": "TV",
        "Clock": "TV",
        "Bidet": "TV",
        "Fireplace": "TV",
        "Converter": "TV",
        "Dust Collector": "TV",
        "Toy": "TV",

        // Catch-all for unspecified devices
        "Other": "TV"
    };
    return deviceTypeMapping[selectedDeviceType] || "TV"; // Default to "TV"
}
/**
 * Normalize the button name based on the device type key.
 * Cleans the button name and matches it against patterns in the mapping
 * to return a standardized button name.
 *
 * @param {string} buttonName - The original button name.
 * @param {string} deviceTypeKey - The device type key used in the mapping.
 * @return {string} The normalized button name.
 */
function normalizeButtonName(buttonName, deviceTypeKey) {
    let mapping = buttonNameMapping[deviceTypeKey];
    if (!mapping) {
        mapping = {}; // Default to empty mapping
    }
    // Clean the button name: lowercase and remove underscores, hyphens, spaces, and slashes
    let cleanedName = buttonName.toLowerCase().replace(buttonNameCleanRegex, "");
    for (const pattern in mapping) {
        // Use regular expressions to match the cleaned button name
        if (new RegExp(`^${pattern}$`).test(cleanedName)) {
            return mapping[pattern];
        }
    }
    return buttonName; // Return original name if no mapping found
}

/**
 * Parse the content of an IR file into a structured data array.
 * Each button in the IR file is represented as an object with its properties.
 *
 * @param {string} content - The content of the IR file.
 * @return {Array<Object>} An array of button data objects.
 */
function parseIRFile(content) {
    const lines = content.split('\n');
    const irData = [];
    let currentButton = {};

    lines.forEach((line) => {
        line = line.trim();
        if (line.startsWith('name:')) {
            // Start of a new button definition
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

    // Add the last button if any
    if (Object.keys(currentButton).length) {
        irData.push(currentButton);
    }

    return irData;
}

/**
 * Create the content for the output IR file.
 * Includes the header, comments with device information, and button data.
 *
 * @param {Array<Object>} irData - The array of button data.
 * @param {string} brand - The brand of the device.
 * @param {string} remoteModel - The model of the remote.
 * @param {string} deviceType - The type of the device.
 * @param {string} [deviceModel=""] - The model of the device (optional).
 * @param {string} deviceTypeKey - The device type key used in the mapping.
 * @param {string} [deviceLink=""] - A link to the device information (optional).
 * @param {string} [deviceDescription=""] - A description of the device (optional).
 * @param {string} [contributorName=""] - The name of the contributor (optional).
 * @return {string} The content for the output IR file.
 */
function createIRContent(irData, brand, remoteModel, deviceType, deviceModel = "", deviceTypeKey, deviceLink = "", deviceDescription = "", contributorName = "") {
    let content = `Filetype: IR signals file\nVersion: 1\n#\n`;

    // Sanitize the device description to remove all types of line breaks
    if (deviceDescription) {
        deviceDescription = deviceDescription.replace(/[\r\n]+/g, ' ').trim();
    }

    // Create an array of comment lines with device information
    let infoItems = [
        brand ? `Brand: ${brand}` : "",
        remoteModel ? `Remote Model: ${remoteModel}` : "",
        deviceModel ? `Device Model: ${deviceModel}` : "",
        deviceType ? `Device Type: ${deviceType}` : "",
        deviceLink ? `Link: ${deviceLink}` : "",
        deviceDescription ? `Description: ${deviceDescription}` : "",
        contributorName ? `Contributor: ${contributorName}` : ""
    ].filter(item => item);

    // **Sanitize each item to remove any line breaks**
    infoItems = infoItems.map(item => item.replace(/[\r\n]+/g, ' ').trim());

    // Add each info item as a separate comment line
    infoItems.forEach(item => {
        content += `# ${item}\n`;
    });

    content += "#\n"; // Add a blank comment line

    // Add button data
    irData.forEach(button => {
        // Normalize the button name
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


/**
 * Process multiple IR files selected by the user.
 * Parses each file, normalizes button names, and creates a ZIP archive
 * containing the processed IR files, preserving folder structure.
 */
function processIRFiles() {
    // Get selected files from both file inputs
    const fileInputFiles = document.getElementById("file-input-files");
    const fileInputFolder = document.getElementById("file-input-folder");

    const filesFromFilesInput = fileInputFiles.files;
    const filesFromFolderInput = fileInputFolder.files;

    // Combine files from both inputs
    const allFiles = [...filesFromFilesInput, ...filesFromFolderInput];

    if (!allFiles.length) {
        alert("Please select .ir files or a folder containing .ir files.");
        return;
    }

    // Get device type and other inputs from the user
    const deviceType = document.getElementById("device-type").value;
    const deviceTypeKey = getDeviceTypeKey(deviceType);
    const deviceLink = document.getElementById("device-link").value.trim();
    const deviceDescription = document.getElementById("device-description").value.trim();
    const brandInput = document.getElementById("brand").value.trim();
    const deviceModelInput = document.getElementById("device-model").value.trim();
    const remoteModelInput = document.getElementById("remote-model").value.trim();
    const contributorName = document.getElementById("contributor-name").value.trim();

    if (!deviceType) {
        alert("Please select a device type.");
        return;
    }

    // Filter .ir files
    const irFiles = Array.from(allFiles).filter(file => file.name.endsWith('.ir'));

    if (irFiles.length === 0) {
        alert("No .ir files found in the selected files/folder.");
        return;
    }

    const zip = new JSZip();
    const promises = [];

    irFiles.forEach(file => {
        const promise = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result;
                const irData = parseIRFile(fileContent);
                
                // Extract brand and remote model from filename if not provided
                let brand = brandInput;
                let remoteModel = remoteModelInput;

                if (!brand || !remoteModel) {
                    const extracted = extractBrandAndModel(file.name);
                    if (!brand) brand = extracted.brand;
                    if (!remoteModel) remoteModel = extracted.remoteModel;
                }

                const processedContent = createIRContent(
                    irData,
                    brand,
                    remoteModel,
                    deviceType,
                    deviceModelInput,
                    deviceTypeKey,
                    deviceLink,
                    deviceDescription,
                    contributorName
                );

                // Preserve folder structure if available
                let relativePath = file.webkitRelativePath || file.name;
                // Remove any leading folder names (e.g., if selecting files directly)
                const pathParts = relativePath.split('/');
                if (pathParts.length > 1) {
                    pathParts.shift(); // Remove the first folder (since webkitRelativePath includes the folder name)
                    relativePath = pathParts.join('/');
                } else {
                    relativePath = pathParts[0];
                }

                // Use the same relative path in the ZIP
                zip.file(relativePath, processedContent);
                resolve();
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.readAsText(file);
        });
        promises.push(promise);
    });

    // Generate the ZIP file and trigger download
    Promise.all(promises).then(() => {
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, "formatted_ir_files.zip");
        });
    }).catch(error => {
        alert("Error processing files: " + error);
    });
}


/**
 * Extract the brand and remote model from the filename.
 * Assumes the filename is in the format Brand_MODEL.ext
 *
 * @param {string} filename - The filename of the IR file.
 * @return {Object} An object containing the brand and remote model.
 */
function extractBrandAndModel(filename) {
    // Remove extension
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");

    // Split by underscores or spaces
    const parts = nameWithoutExtension.split(/[_ ]+/);

    // Assuming the format is Brand_MODEL
    const brand = parts[0] || "";
    const remoteModel = parts.slice(1).join("_") || "";

    return { brand, remoteModel };
}

// DOM Elements and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const fileInputFiles = document.getElementById('file-input-files');
    const fileInputFolder = document.getElementById('file-input-folder');
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

    // File processing on button click
    processButton.addEventListener('click', processIRFiles);

    // Update file input labels
    fileInputFiles.addEventListener('change', (event) => {
        const fileCount = event.target.files.length;
        const fileName = fileCount > 1 ? `${fileCount} files selected` : event.target.files[0]?.name || 'Choose files...';
        fileInputFiles.nextElementSibling.textContent = fileName;
    });

    fileInputFolder.addEventListener('change', (event) => {
        const fileCount = event.target.files.length;
        const folderName = fileCount > 0 ? `Folder selected with ${fileCount} files` : 'Choose a folder...';
        fileInputFolder.nextElementSibling.textContent = folderName;
    });
});

/**
 * Update the theme toggle button text based on the current theme.
 *
 * @param {string} theme - The current theme ('light-mode' or 'dark-mode').
 */
function updateButtonText(theme) {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    themeToggleButton.textContent = theme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}
