import { EventData, Storage } from '../types';

export class ChromeStorage implements Storage {
  async set(key: string, value: EventData): Promise<void> {
    await chrome.storage.local.set({ [key]: value });
  }

  async get(key: string): Promise<EventData | undefined> {
    const result = await chrome.storage.local.get(key);
    return result[key];
  }

  async getAll(): Promise<{ [key: string]: EventData }> {
    return await chrome.storage.local.get(null);
  }

  async clear(): Promise<void> {
    await chrome.storage.local.clear();
  }
}