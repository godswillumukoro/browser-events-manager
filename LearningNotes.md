# Browser Events Manager

> Learn with me.
>

# First Steps:

- Learn about browser events
- Read the docs about browser events
- Learn to log generic browser events

# My understanding of Browser Events

Events: Specific actions taking place at specific times

# What it takes to build a chrome extension

## Manifest.json

This file is very important, your chrome extension wouldn’t work without it. It must be present at the root dir. It provides information about the extension to chrome. Its contains:

1. name: The name of the extension
2. version: Extension version
3. description: Describes the extension
4. permissions: What features you want from the browser eg. tabs(chrome.tabs), storage etc.
5. host_permission: Ability to send CORS request to certain host names
6. service_workers: Javascript file that runs separately from the browser thread
7. content_scripts: Files that run in context of the web pages we’re on. Can be used to manipulate the DOM of our webpage that our extension is looking at
8. default_popup: Specify the UI file

# Links

Chrome Browser Docs: [https://developer.chrome.com/docs/extensions/reference/events/](https://developer.chrome.com/docs/extensions/reference/events/)

Firefox Browser Docs: [https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/)