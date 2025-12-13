CIfA Report Validator (Chrome/Edge Extension)

A browser extension designed to assist UK archaeologists in validating reports against standards set by the **Chartered Institute for Archaeologists (CIfA)** and **Historic England**.

This tool acts as a "pre-flight checker" for grey literature, ensuring essential metadata and sections are present before submission to the OASIS database.

🚀 Features

*   **OASIS ID Validation:** Automatically detects if a valid OASIS ID (e.g., `oxfordar1-123456`) is missing.
*   **National Grid Reference (NGR) Check:** Verifies the presence of a UK OSGB36 coordinate (e.g., `TL 1234 5678`).
*   **Structure Compliance:** Scans for mandatory CIfA sections including:
    *   Non-technical / Executive Summary
    *   Methodology
    *   Bibliography / References
*   **Keyword Density Analysis:** Calculates the density of archaeological terminology to flag potentially low-quality or placeholder text.

🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3
*   **Logic:** Vanilla JavaScript (ES6)
*   **Validation:** Regular Expressions (Regex) for pattern matching UK-specific data formats.
*   **Platform:** Manifest V3 (Chrome/Edge/Brave)

📦 How to Install

Since this is a developer tool, you can install it in "Developer Mode" on any Chromium browser:

1.  Download this repository as a ZIP file and extract it.
2.  Open your browser and navigate to `chrome://extensions` or `edge://extensions`.
3.  Toggle **Developer Mode** (top right corner).
4.  Click **Load Unpacked**.
5.  Select the folder containing the `manifest.json` file.
6.  Pin the extension to your toolbar and click to use!

🧪 How to Use

1.  Open a draft archaeological report (Word, PDF, or Web).
2.  Copy the text (Summary, Intro, or full text).
3.  Click the **CIfA Validator** icon in your browser.
4.  Paste the text into the input area.
5.  Click **Validate Report**.
6.  Review the checklist for missing compliance items.

📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
