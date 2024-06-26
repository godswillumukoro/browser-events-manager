// Service worker code

// Tabs events
chrome.tabs.onCreated.addListener(function(tab) {
    console.log('Tab Created:', tab);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Tab Updated:', tab);
});

chrome.tabs.onMoved.addListener(function(tabId, moveInfo) {
    console.log('Tab Moved:', moveInfo);
});

// Windows events
chrome.windows.onCreated.addListener(function(window) {
    console.log('Window Created:', window);
});

chrome.windows.onRemoved.addListener(function(windowId) {
    console.log('Window Removed:', windowId);
});

chrome.windows.onFocusChanged.addListener(function(windowId) {
    console.log('Window Focus Changed:', windowId);
});

// Bookmarks events
chrome.bookmarks.onCreated.addListener(function(bookmarkId, bookmarkInfo) {
    console.log('Bookmark Created:', bookmarkInfo);
});

chrome.bookmarks.onRemoved.addListener(function(bookmarkId, removeInfo) {
    console.log('Bookmark Removed:', removeInfo);
});

// Cookies events
chrome.cookies.onChanged.addListener(function(changeInfo) {
    console.log('Cookie Changed:', changeInfo);
});

// History events
chrome.history.onVisited.addListener(function(historyItem) {
    console.log('History Visited:', historyItem);
});

// Downloads events
chrome.downloads.onCreated.addListener(function(downloadItem) {
    console.log('Download Created:', downloadItem);
});

chrome.downloads.onChanged.addListener(function(downloadDelta) {
    console.log('Download Changed:', downloadDelta);
});

// Sessions events
chrome.sessions.onChanged.addListener(function() {
    console.log('Session Changed');
});

// Idle events
chrome.idle.onStateChanged.addListener(function(newState) {
    console.log('Idle State Changed:', newState);
});
