class HashTable {
  table: number[];
  size: number;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  // private key:
  _hash(key: String) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key[i];
    }
    console.log('hash:', hash);
    return hash % this.table.length;
  }
  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }
  get(key) {
    let index = this._hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this._hash(key);
    if (this.table[index] && this.table[index.length]) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

let hashTable = new HashTable();

/*
 
Hash Table / Associative Array / Map (in jS):


! Object Literals:
- Object literals in JS run the risk of collisions as well as naming conflicts with built-in properties/methods.

differences:
    - Objects inherit default properties from the Object class. Keys you input MAY conflict and overwrite them.
    - The size of the hash table is NOT tracked. This is a manually property you'll need to track

To overcome these differences, the Map was added to ES2015


 
! JavaScript Maps:
- Unlike Object, Map requires you to use the set() and get() methods to define and retrieve any key-pair values that you want to be added to the data structure.

- The Map data structure is ALSO iterable, which means you can loop over the data stored in it.


HOW TO IMPLEMENT?
- keys/strings are converted into a HASH using a hash function
- the hashes are assigned to buckets and given an index for reference

*/
