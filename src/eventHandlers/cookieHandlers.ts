import { EventData, EventHandler, EventType } from '../types';

export class CookieChangedHandler implements EventHandler {
  handleEvent(changeInfo: chrome.cookies.CookieChangeInfo): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'cookies.onChanged' as EventType,
      value: changeInfo,
    };
  }
}