 "use strict";
class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error("Key error");
    }
    return this._slots[index].value;
  }

  set(key, value) {
    console.log('key' , key);
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);

    this._slots[index] = {
      key,
      value,
      deleted: false,
      next: null 
    };
    this.length++;
  }

  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error("Key error");
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }
//  The first is that each slot holds a linked list. 
//  When you want to add a value, you hash the key, find the slot, 
//  then add the pair to the start of the list. This is known as separate chaining. 
  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      console.log('slot in findSlot', slot)
  
      if (slot === undefined) {
        console.log('we got this far');
        return slot;
      } 
      else if (slot.key == key) {
        console.log('but not here');

        console.log('this is the slot', slot);
        return slot;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.deleted) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

let names = [
  { Hobbit: "Bilbo" },
  { Hobbit: "Frodo" },
  { Wizard: "Gandolf" },
  { Human: "Aragon" },
  { Elf: "Legolas" },
  { Maiar: "The Necromancer" },
  { Maiar: "Sauron" },
  { RingBearer: "Gollum" },
  { LadyOfLight: "Galadriel" },
  { HalfElven: "Arwen" },
  { ShepherdOfTheTrees: "Treebeard" }
];

const hashNames = new HashMap();
console.log(hashNames);
hashNames.set("Hobbit", "Bilbo");
console.log(hashNames);
hashNames.set("Hobbit", "Frodo");
// hashNames.set("Wizard", "Gandolf");
// hashNames.set("Human", "Aragon");
// hashNames.set("Elf", "Legolas");
// hashNames.set("Maiar", "The Necromancer");
// hashNames.set("Maiar", "Sauron");
// hashNames.set("RingBearer", "Gollum");
// hashNames.set("LadyOfLight", "Galadriel");
// hashNames.set("HalfElven", "Arwen");
// hashNames.set("ShepherdOfTheTrees", "Treebeard");
// // hashNames.remove('Hobbit');
console.log(hashNames);

// {deleted: false, key: "Hobbbit", value: {"Bilbo":{Frodo}}}
