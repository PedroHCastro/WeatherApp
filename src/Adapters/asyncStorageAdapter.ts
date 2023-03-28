import {CacheModel} from '../models/cache.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageAdapter implements CacheModel {
  set(key: string, value?: object | string): void {
    if (value) {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      AsyncStorage.removeItem(key);
    }
  }

  async get<T>(key: string): Promise<T | undefined> {
    const getItem = await AsyncStorage.getItem(key);
    if (getItem) {
      return JSON.parse(getItem) as T;
    }
    return undefined;
  }

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}
