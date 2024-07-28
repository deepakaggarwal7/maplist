export class MapList<K extends string | number, V> extends Map<K, V> {
    constructor(entries?: [K, V][]) {
      super(entries);
    }
  
    find(predicate: (value: V) => boolean): V | undefined {
      for (const value of this.values()) {
        if (predicate(value)) {
          return value;
        }
      }
      return undefined;
    }
  
    findAll(keys: K[]): V[] {
      const results: V[] = [];
      for (const key of keys) {
        if (this.has(key)) {
          results.push(this.get(key) as V);
        }
      }
      return results;
    }
  
    filter(predicate: (value: V) => boolean): V[] {
      const results: V[] = [];
      for (const value of this.values()) {
        if (predicate(value)) {
          results.push(value);
        }
      }
      return results;
    }

    some(predicate: (value: V) => boolean): boolean {
      for (const value of this.values()) {
        if (predicate(value)) {
          return true;
        }
      }
      return false;
    }
  
    map<T>(callback: (value: V) => T): T[] {
      const results: T[] = [];
      for (const value of this.values()) {
        results.push(callback(value));
      }
      return results;
    }


    static createFrom<T extends { id?: any }, K extends keyof T>(
        list: T[],
        keyProperty?: K
      ): MapList<Extract<T[K], string | number>, T> {
        const mapEntries: [Extract<T[K], string | number>, T][] = [];
  
      for (const item of list) {
        const key = keyProperty ? item[keyProperty] : item['id'];
        if (key === undefined) {
          throw new Error("Key property not found on item");
        }
        mapEntries.push([key, item]);
      }
  
      return new MapList(mapEntries);
    }
  }