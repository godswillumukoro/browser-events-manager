import { EventData, EventHandler, EventType } from '../types';

export class WindowCreatedHandler implements EventHandler {
  handleEvent(window: chrome.windows.Window): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'windows.onCreated' as EventType,
      value: window,
    };
  }
}

export class WindowRemovedHandler implements EventHandler {
  handleEvent(windowId: number): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'windows.onRemoved' as EventType,
      value: { windowId },
    };
  }
}

export class WindowFocusChangedHandler implements EventHandler {
  handleEvent(windowId: number): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'windows.onFocusChanged' as EventType,
      value: { windowId },
    };
  }
}