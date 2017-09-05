class HashMap {
  constructor(initialCapacity = 8) {        //what we begin our Hash map with 
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);   //this converts our "string" to a number value
      hash = hash & hash; // the logical and (&) forces our hash into a fixed value so we can get PERFECT HASH FUNCTIONS
    }
    return hash >>> 0;
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity; // just adding one space to insert the new KEY VALUE pair
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO); // this if -- deterimines if we need to resize our hash map
    }

    const index = this._findSlot(key);
    this._slots[index] = {          //this is where we have our slots index for our new KEY VALUE pair
      key,
      value
    };
    this.length++;   //this increases the length property by one 

  _findSlot(key) {
    const hash = HashMap._hashString(key);  
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || slot.key == key) {
        return index;
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

