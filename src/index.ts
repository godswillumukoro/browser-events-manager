import { InMemoryStorage } from './storage/inMemoryStorage';
import { ChromeStorage } from './storage/chromeStorage';
import { ExternalStorage } from './api/externalStorage';
import { EventManager } from './eventManager';
import {
  TabCreatedHandler, TabUpdatedHandler, TabRemovedHandler, TabMovedHandler
} from './eventHandlers/tabHandlers';
import { BookmarkCreatedHandler, BookmarkRemovedHandler } from './eventHandlers/bookmarkHandlers';
import { DownloadCreatedHandler, DownloadChangedHandler } from './eventHandlers/downloadHandlers';
import { HistoryVisitedHandler } from './eventHandlers/historyHandlers';
import { IdleStateChangedHandler } from './eventHandlers/idleHandlers';
import { WindowCreatedHandler, WindowRemovedHandler, WindowFocusChangedHandler } from './eventHandlers/windowHandlers';

const inMemoryStorage = new InMemoryStorage();
const chromeStorage = new ChromeStorage();
const externalStorage = new ExternalStorage('http://127.0.0.1:4999');

const eventHandlers = {
  // Tab handlers
  'tabs.onCreated': new TabCreatedHandler(),
  'tabs.onUpdated': new TabUpdatedHandler(),
  'tabs.onRemoved': new TabRemovedHandler(),
  'tabs.onMoved': new TabMovedHandler(),

  // Bookmark handlers
  'bookmarks.onCreated': new BookmarkCreatedHandler(),
  'bookmarks.onRemoved': new BookmarkRemovedHandler(),

  // Download handlers
  'downloads.onCreated': new DownloadCreatedHandler(),
  'downloads.onChanged': new DownloadChangedHandler(),

  // History handlers
  'history.onVisited': new HistoryVisitedHandler(),

  // Idle handlers
  'idle.onStateChanged': new IdleStateChangedHandler(),

  // Window handlers
  'windows.onCreated': new WindowCreatedHandler(),
  'windows.onRemoved': new WindowRemovedHandler(),
  'windows.onFocusChanged': new WindowFocusChangedHandler(),
};

const eventManager = new EventManager(
  inMemoryStorage,
  chromeStorage,
  externalStorage,
  eventHandlers
);

// Call recovery function on extension startup
eventManager.recoverFromLogs();

// Event listeners

// Tabs
chrome.tabs.onCreated.addListener((tab) => {
  eventManager.saveData(tab, 'tabs.onCreated');
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  eventManager.saveData([tabId, changeInfo, tab], 'tabs.onUpdated');
});
chrome.tabs.onRemoved.addListener((tabId) => {
  eventManager.saveData(tabId, 'tabs.onRemoved');
});
chrome.tabs.onMoved.addListener((tabId, moveInfo) => {
  eventManager.saveData([tabId, moveInfo], 'tabs.onMoved');
});

// Windows
chrome.windows.onCreated.addListener((window) => {
  eventManager.saveData(window, 'windows.onCreated');
});
chrome.windows.onRemoved.addListener((windowId) => {
  eventManager.saveData(windowId, 'windows.onRemoved');
});
chrome.windows.onFocusChanged.addListener((windowId) => {
  eventManager.saveData(windowId, 'windows.onFocusChanged');
});

// Bookmarks
chrome.bookmarks.onCreated.addListener((bookmarkId, bookmarkInfo) => {
  eventManager.saveData([bookmarkId, bookmarkInfo], 'bookmarks.onCreated');
});
chrome.bookmarks.onRemoved.addListener((bookmarkId, removeInfo) => {
  eventManager.saveData([bookmarkId, removeInfo], 'bookmarks.onRemoved');
});

// Downloads
chrome.downloads.onCreated.addListener((downloadItem) => {
  eventManager.saveData(downloadItem, 'downloads.onCreated');
});
chrome.downloads.onChanged.addListener((downloadDelta) => {
  eventManager.saveData(downloadDelta, 'downloads.onChanged');
});

// History
chrome.history.onVisited.addListener((historyItem) => {
  eventManager.saveData(historyItem, 'history.onVisited');
});

// Idle
chrome.idle.onStateChanged.addListener((newState) => {
  eventManager.saveData(newState, 'idle.onStateChanged');
});
