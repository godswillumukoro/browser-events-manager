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

Understanding the Web Extensions APi - https://developer.chrome.com/docs/extensions/mv3/

## Manifest.json

This file is very important, your chrome extension wouldn’t work without it. It must be present at the root dir. It provides information about the extension to any browser. Its contains:

1. name: The name of the extension
2. version: Extension version
3. description: Describes the extension
4. permissions: What features you want from the browser eg. tabs(chrome.tabs), storage(chrome.storage) etc.
5. host_permission: Ability to send CORS request to certain host names
6. service_worker: Javascript file that runs separately from the browser thread. Although it does not have access to contents of the webpage, it does have capability to speak with the browser extension via the extension messaging system
7. content_scripts: Files that run in context of the web pages we’re on. Can be used to manipulate the DOM of our webpage that our extension is looking at
8. default_popup: Specify the UI file

# Links

Chrome Browser Docs: https://developer.chrome.com/docs/extensions/reference/events/

Firefox Browser Docs: https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/

Safari Browser Docs: https://developer.apple.com/documentation/safariservices/safari_web_extensions

W3C Specification: https://browserext.github.io/browserext/#introduction

## Additional Links

https://github.com/fregante/Awesome-WebExtensions?tab=readme-ov-file

https://saeedesmaili.com/getting-started-with-developing-browser-extensions/

https://dev.to/christiankaindl/a-webextension-guide-36ag

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API

https://babyprogrammer.com/building-browser-extensions/

https://vinceumo.github.io/devNotes/Javascript/webextensionapi/
