# Flipper IR Formatter

A Python GUI application designed to format IR files for the [Flipper-IRDB](https://github.com/Lucaslhm/Flipper-IRDB) project. This tool standardizes button names and organizes IR files into appropriate directories, streamlining the process of adding new remotes to the database.

## Features

- **User-Friendly GUI**: Intuitive interface built with PyQt5 for easy interaction.
- **Button Name Normalization**: Automatically maps various button name formats to standardized names.
- **Flexible Saving Options**: Allows users to select custom save directories and device types.
- **Error Handling**: Provides clear messages for invalid inputs and processing errors.
- **Compatibility**: Supports raw and parsed IR signal formats.

## Installation

Follow these steps to set up and run the Flipper IR Formatter on your system.

### 1. Download the Latest Release

- Navigate to the [Releases](https://github.com/jaylikesbunda/Flipper-IR-Formatter/releases) page of this repository.
- Download the latest release archive.
- Extract the contents to your desired location.

### 2. Install Python

Ensure you have Python 3.6 or higher installed on your system.

- **Download Python**: Visit the official [Python Downloads](https://www.python.org/downloads/) page.
- **Installation Instructions**:
  - Follow the provided instructions for your operating system (Windows, macOS, or Linux).
  - During installation, make sure to check the option to add Python to your system's PATH.

### 3. Install PyQt5




## Using the Application

- **Select IR File:** 
  - Click the "Browse" button to select the .ir file you want to format.

- **Choose Device Type:** 
  - Select the appropriate device type from the dropdown menu (e.g., TV, Audio, AC).

- **Specify Save Directory:** 
  - Click "Browse Save Directory" to choose where the formatted file will be saved.

- **Enter Device Information:**
  - **Brand:** Input the brand name of the device.
  - **Remote Model:** Input the model number/name of the remote.
  - **Device Model(s):** (Optional) Enter the model number(s) of the device(s) controlled by the remote.

- **Process File:** 
  - Click the "Process File" button to format and save the IR file.

- **Progress and Logs:** 
  - Monitor the progress bar and output text area for status updates and any messages.


- The formatted IR file will be saved in the specified directory, organized under the chosen device type. The file will be named following the pattern:

- Brand_RemoteModel.ir

- Example: Samsung_AA59-00741A.ir

