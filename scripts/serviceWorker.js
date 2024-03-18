// Tabs events
chrome.tabs.onCreated.addListener(function(tab) {
  console.log('Tab Created:', tab)
  saveData(tab, "tabs.onCreated")
  // clearAllData()
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('Tab Updated:', tab)
  saveData(tab, "tabs.onUpdated")
  getAllData()
  // clearAllData()
});

chrome.tabs.onMoved.addListener(function(tabId, moveInfo) {
  console.log('Tab Moved:', moveInfo)
  saveData(moveInfo, "tabs.onMoved")
  // clearAllData()
});

// Windows events
chrome.windows.onCreated.addListener(function(window) {
  console.log('Window Created:', window)
  saveData(window, "windows.onCreated")
  // clearAllData()
});

chrome.windows.onRemoved.addListener(function(windowId) {
  console.log('Window Removed:', windowId)
  saveData(windowId, "windows.onRemoved")
  // clearAllData()
});

chrome.windows.onFocusChanged.addListener(function(windowId) {
  console.log('Window Focus Changed:', windowId)
  saveData(windowId, "windows.onFocusChanged")
  // clearAllData()
});

// Bookmarks events
chrome.bookmarks.onCreated.addListener(function(bookmarkId, bookmarkInfo) {
  console.log('Bookmark Created:', bookmarkInfo)
  saveData(bookmarkInfo, "bookmarks.onCreated")
  // clearAllData()
});

chrome.bookmarks.onRemoved.addListener(function(bookmarkId, removeInfo) {
  console.log('Bookmark Removed:', removeInfo)
  saveData(removeInfo, "bookmarks.onRemoved")
  // clearAllData()
});

// Cookies events
chrome.cookies.onChanged.addListener(function(changeInfo) {
  console.log('Cookie Changed:', changeInfo)
  saveData(changeInfo, "cookies.onChanged")
  // clearAllData()
});

// History events
chrome.history.onVisited.addListener(function(historyItem) {
  console.log('History Visited:', historyItem)
  saveData(historyItem, "history.onVisited")
  // clearAllData()
});

// Downloads events
chrome.downloads.onCreated.addListener(function(downloadItem) {
  console.log('Download Created:', downloadItem)
  saveData(downloadItem, "downloads.onCreated")
  // clearAllData()
});

chrome.downloads.onChanged.addListener(function(downloadDelta) {
  console.log('Download Changed:', downloadDelta)
  saveData(downloadDelta, "downloads.onChanged")
  // clearAllData()
});

// Sessions events
chrome.sessions.onChanged.addListener(function(devices) {
  console.log('Session Changed:', devices)
  saveData(devices, "sessions.onChanged")
  // clearAllData()
});

// Idle events
chrome.idle.onStateChanged.addListener(function(newState) {
  console.log('Idle State Changed:', newState)
  saveData(newState, "idle.onStateChanged")
  // clearAllData()
});

let id = 0

 async function saveData(eventData, eventType) {
  try {
    id += 1
    if (typeof eventData === 'object') {
      eventData.lastInsertID = id
      eventData.eventType = eventType
    } else if(eventType === "windows.onFocusChanged" || "idle.onStateChanged") {
        eventData = { lastInsertID: id, eventType: eventType, value: eventData };
    } else {
    console.warn(`sendData: eventData is not an object: ${eventData}`)
    }

    const data = {}
    data[id] = eventData
    await chrome.storage.local.set(data)
  } catch(error) {
    console.error(`Error saving data: ${error}`)
  }
}

async function getAllData() {
  try {
    const items = await chrome.storage.local.get(null)
    console.log(items)
  } catch (error) {
    console.log(`Error retrieving data: ${error}`)
  }
}

async function clearAllData() {
  try {
    await chrome.storage.local.clear()
    console.log("Data cleared successfully")
  } catch(error) {
    console.error(`Error clearing data: ${error}`)
  }
}
