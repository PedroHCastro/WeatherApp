export interface GetStorage {
  get: (key: string) => any;
}

export interface SetStorage {
  set: (key: string, value: object) => any;
}

export interface RemoveStorage {
  remove: (key: string) => any;
}

export interface CacheModel extends SetStorage, GetStorage, RemoveStorage {}
