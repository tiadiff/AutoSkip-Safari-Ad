# Auto Skip Ad Safari ⏩

A lightweight Safari Web Extension designed to enhance your video viewing experience by automatically clicking the "Skip" button when it becomes available.

## Philosophy ⚖️

We believe in a fair and sustainable web. Advertisements are a crucial part of the internet ecosystem, allowing creators to continue providing free, high-quality content. However, when platforms offer a "Skip Ad" option, it is a built-in feature designed to be used.

**Auto Skip Ad Safari** simply automates that click for you. It doesn't block ads; it just saves you the manual effort of waiting with your cursor over the button. Use it responsibly and consider supporting your favorite creators directly!

## How it works 🛠️

- **Smart Scanning**: The extension scans the video player every 5 seconds.
- **Selective Action**: It looks for specific "Skip" buttons (YouTube, Vimeo, Dailymotion).
- **Automation**: If the button is visible and clickable, the extension triggers the click event instantly.
- **Native Experience**: Built as a native Safari Web Extension for maximum performance and minimum battery impact.

## Installation (for Developers) 💻

Since the extension is not yet published on the Apple App Store, the end user has two options:

### 1. If the user is a "Power User" or Developer (Xcode Method):
1. Download the code from GitHub (ZIP or git clone).
2. Open the `.xcodeproj` file with Xcode.
3. Change the **Team** in the "Signing & Capabilities" settings to your Apple account (free or developer).
4. Press **Run** (Cmd + R).
5. Open Safari and enable it in Settings > Extensions.

### 2. If the user just wants to try it (Safari Development Method):
Safari allows you to load temporary extensions without recompiling.

1. Download the `SkipAdExtension/Resources` folder.
2. In Safari, go to **Settings > Advanced** and enable "Show web developer features."
3. In the **Develop** menu (top menu bar), click "Allow unsigned extensions."
4. Still in the **Develop** menu, select "Show Extension Builder" (or use `xcrun safari-web-extension-converter` to convert the resources folder).

## Why Safari? 🍎

Unlike many Chrome-based extensions that consume significant RAM, this extension is optimized for macOS, ensuring your browsing remains fast and your MacBook's battery lasts longer.

---
*Disclaimer: This project is for personal use and educational purposes. Ensure you comply with the terms of service of the video platforms you visit.*
