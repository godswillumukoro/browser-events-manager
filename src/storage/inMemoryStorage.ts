import { EventData, Storage } from '../types';

export class InMemoryStorage implements Storage {
  private storage: { [key: string]: EventData } = {};

  async set(key: string, value: EventData): Promise<void> {
    this.storage[key] = value;
  }

  async get(key: string): Promise<EventData | undefined> {
    return this.storage[key];
  }

  async getAll(): Promise<{ [key: string]: EventData }> {
    return { ...this.storage };
  }

  async clear(): Promise<void> {
    this.storage = {};
  }
}