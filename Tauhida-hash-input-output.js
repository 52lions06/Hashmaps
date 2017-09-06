let hTable = new HashMap();
let names = [
  { Hobbit: "Bilbo" },
  { Hobbit: "Frodo" },
  { Wizard: "Gandolf" },
  { Human: "Aragon" },
  { Elf: "Legolas" },
  { Maiar: "The Necromancer" },
  { Maiar2: "Sauron" },
  { RingBearer: "Gollum" },
  { LadyOfLight: "Galadriel" },
  { HalfElven: "Arwen" },
  { ShepherdOfTheTrees: "Treebeard" }
];

for (var i = 0; i < names.length; ++i) {
  for (let keys in names[i]) {
    hTable.insert(keys, names[i][keys]);
  }
}
hTable.insert("Instructor", "Tauhida");
hTable.remove("Instructor");
hTable.insert("Instructor2", "Chris");
hTable.insert("TA", "Joshua");
console.log(hTable);

/* Logs the following*/
{
  length: 12,
  hashTable: [
    null,
    {
      key: "Maiar2",
      value: "Sauron",
      deleted: false,
      next: {
        key: "ShepherdOfTheTrees",
        value: "Treebeard",
        deleted: false
      }
    },
    {
      key: "HalfElven",
      value: "Arwen"
      deleted: false,
      next: {
        key: "Instructor",
        value: "Tauhida",
        deleted: true,
        next: {
          key: "TA",
          value: "Joshua",
          deleted: false
        }
      }
    },
    null,
    {
      key: "Elf",
      value: "Legolas",
      deleted: false,
      next: {
        key: "LadyOfLight",
        value: "Galadriel",
        deleted: false,
        next: {
          key: "Instructor2",
          value: "Chris",
          deleted: false
        }
      }
    },
    {
      key: "Hobbit",
      value: "Frodo",
      deleted: false
    },
    {
      key: "Wizard",
      value: "Gandolf",
      deleted: false,
      next: {
        key: "Human",
        value: "Aragon",
        deleted: false,
        next: {
          key: "RingBearer",
          value: "Gollum",
          deleted: false
        }
      }
    },
    {
      key: "Maiar",
      value: "The Necromancer",
      deleted: false
    }
  ],
  _capacity: 8,
  _deleted: 1
};