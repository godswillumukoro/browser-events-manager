# Browser Events Manager

A system to capture, store, and replicate browser events

## What events are captured?
The following events are being logged to your browser console: Tab Changes, Window Changes, Bookmark Changes, Cookies, History, Downloads, and Session Changes

## Where is it stored?
All events are currently stored in the browser's storage API. But this storage medium is intended to hold these data temporariry before implemented a data replication mechanism. Which will be built in the future.

## What browsers are supported?
This browser extension is well suported on chromium browsers at the moment, we would extend support to firefox in the future.

## How can I run it?
To run, download this repo, go to your browser's extension page
- Chrome: chrome://extensions/
- Brave: brave://extensions/

Then click on `Load unpacked`, select this repo, then click on service worker to view logged events

## How does it work?
After the events mentioned above are stored to the browser's storage using the `chrome.storage` API, upon every new `browser tab` that a user opens, it triggers a `getAllData` function which retrives all stored data to the `browser's console`