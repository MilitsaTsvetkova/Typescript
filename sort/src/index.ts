import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const collection = new NumbersCollection([10, 3, -5, 0]);
const characters = new CharactersCollection("Xaaa");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(23);
linkedList.add(-45);

collection.sort();
characters.sort();
linkedList.sort();
console.log(collection.data);
console.log(characters.data);
linkedList.print();
