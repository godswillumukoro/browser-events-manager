chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
  console.log('Tab Updated:', tab);
  sendData(tab, "tabs.onUpdated")
  // clearAll()
  getAll()
});

let id = 0

// Set all data from chrome.storage
 function sendData(eventData, eventType) {
  id += 1
  eventData.lastInsertID = id
  eventData.eventType = eventType

  const data = {}
  data[id] = eventData
  chrome.storage.local.set(data)
}

function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function getAll() {
 let gettingItem = chrome.storage.local.get()
 gettingItem.then(onGot, onError)
}

function clearAll() {
  chrome.storage.local.clear()
}
