# Browser Events Manager

## Overview

Browser Events Manager is a Chrome extension designed to capture, store, and replicate various browser events. It provides a robust system for logging and managing user interactions within the Chrome browser, offering insights into browsing behavior and patterns.

## Features

- Captures a wide range of browser events including:
  - Tab events (creation, updates, removal, movement)
  - Window events (creation, removal, focus changes)
  - Bookmark events (creation, removal)
  - Download events (creation, changes)
  - History events (page visits)
  - Idle state changes
- Stores event data locally using Chrome's storage API
- Implements a Write-Ahead Logging (WAL) system for data integrity
- Replicates data to an external API for backup purposes
- Provides methods for data recovery and retrieval

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/browser-events-manager.git
   ```
2. Navigate to the project directory:
   ```
   cd browser-events-manager
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the project:
   ```
   npm run build
   ```

## Loading the Extension

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `dist` folder in the project directory

## Usage

Once installed, the extension will automatically start capturing browser events. No user interaction is required for basic functionality.

## Project Structure

- `src/`: Source code
  - `index.ts`: Main entry point
  - `eventManager.ts`: Central event management system
  - `types.ts`: TypeScript type definitions
  - `storage/`: Storage implementations
  - `api/`: External API interactions
  - `eventHandlers/`: Event-specific handlers
- `dist/`: Compiled and bundled code (generated after build)
- `manifest.json`: Chrome extension manifest file
- `webpack.config.js`: Webpack configuration
- `jest.config.js`: Jest testing configuration
- `tsconfig.json`: TypeScript configuration

## Development

### Building the Project
```
npm run build
```


### Running Tests
```
npm test
```


### Adding New Event Types

1. Create a new handler in `src/eventHandlers/`
2. Update `src/types.ts` to include the new event type
3. Add the event listener in `src/index.ts`
4. Update `manifest.json` if additional permissions are required

## Acknowledgments

This project is being reviewd by [nothingmuch](https://github.com/nothingmuch)