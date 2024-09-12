import { EventData, EventHandler, EventType } from '../types';

export class TabCreatedHandler implements EventHandler {
  handleEvent(tab: chrome.tabs.Tab): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'tabs.onCreated' as EventType,
      value: {
        tabId: tab.id,
        url: tab.url || 'unknown',
        status: 'opened'
      },
    };
  }
}

export class TabUpdatedHandler implements EventHandler {
  handleEvent(data: [number, chrome.tabs.TabChangeInfo, chrome.tabs.Tab]): EventData | null {
    const [tabId, changeInfo, tab] = data;
    if (changeInfo.url) {
      return {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        eventType: 'tabs.onUpdated' as EventType,
        value: {
          tabId: tabId,
          url: changeInfo.url,
          status: 'updated',
        },
      };
    }
    return null;
  }
}

export class TabRemovedHandler implements EventHandler {
  handleEvent(data: [number, chrome.tabs.TabRemoveInfo]): EventData {
    const [tabId, removeInfo] = data;
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'tabs.onRemoved' as EventType,
      value: {
        tabId: tabId,
        status: 'closed',
        isWindowClosing: removeInfo.isWindowClosing
      },
    };
  }
}

export class TabMovedHandler implements EventHandler {
  handleEvent(data: [number, chrome.tabs.TabMoveInfo]): EventData {
    const [tabId, moveInfo] = data;
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'tabs.onMoved' as EventType,
      value: { tabId, moveInfo },
    };
  }
}