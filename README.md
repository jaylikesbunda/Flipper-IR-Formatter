# Flipper IR Formatter

Do you have a bunch of cloned remotes you didn't use XRemote for and want to contribute to the IRDB but don't want to rename every button? Have I got the thing for you!

A web-based and Python GUI tool designed to format IR files for the [Flipper-IRDB](https://github.com/Lucaslhm/Flipper-IRDB) project. This formatter helps standardize button names and organizes IR files into appropriate directories, streamlining the process of adding new remotes to the database.

Uses a custom  [Naming Standard](/naming.md) designed to be as compatible as possible 


## Features

- **User-Friendly Web Tool**: Easily accessible and intuitive web-based formatter—no installation required! Try it here: [Web Formatter](https://jaylikesbunda.github.io/Flipper-IR-Formatter/).
- **Button Name Normalization**: Automatically maps various button name formats to standardized names for consistent formatting.
- **Flexible Saving Options**: In the desktop version, users can select custom save directories and device types.
- **Error Handling**: Clear error messages for invalid inputs or processing issues.
- **Compatibility**: Supports raw and parsed IR signal formats.

## Recommended: Use the Web Formatter

I highly recommend using the web version of the Flipper IR Formatter for ease of use. It requires no installation, works directly in your browser, and provides the same functionality as the desktop app. 

[Click here to use the Web Formatter](https://jaylikesbunda.github.io/Flipper-IR-Formatter/)

## Python GUI Installation (Optional)

For those who prefer the desktop version, follow these instructions:

### 1. Download the Latest Release

- Go to the [Releases](https://github.com/jaylikesbunda/Flipper-IR-Formatter/releases) page.
- Download the latest release archive.
- Extract the contents to your desired location.

### 2. Install Python

Ensure you have Python 3.6 or higher installed.

- **Download Python**: Visit [Python Downloads](https://www.python.org/downloads/).
- **Installation Instructions**:
  - Follow the instructions for your OS (Windows, macOS, or Linux).
  - Check the option to add Python to your system's PATH during installation.

### 3. Install PyQt5

Run the following command to install PyQt5:

```bash
pip install PyQt5

