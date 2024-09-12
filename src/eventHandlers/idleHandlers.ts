import { EventData, EventHandler, EventType } from '../types';

export class IdleStateChangedHandler implements EventHandler {
  handleEvent(newState: chrome.idle.IdleState): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'idle.onStateChanged' as EventType,
      value: newState,
    };
  }
}