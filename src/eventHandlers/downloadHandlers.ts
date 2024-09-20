import { EventData, EventHandler, EventType } from '../types';

export class DownloadCreatedHandler implements EventHandler {
  handleEvent(downloadItem: chrome.downloads.DownloadItem): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'downloads.onCreated' as EventType,
      value: downloadItem,
    };
  }
}

export class DownloadChangedHandler implements EventHandler {
  handleEvent(downloadDelta: chrome.downloads.DownloadDelta): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'downloads.onChanged' as EventType,
      value: downloadDelta,
    };
  }
}