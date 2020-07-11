import { range } from "./utils/range";
import { fold } from "./utils/fold";
import { filter } from "./utils/filter";
import { map } from "./utils/map";
import { pureDelete } from "./utils/pureDelete";

const mixedArrsy: object[] = [
    [],
    { name: "Jack" },
    { name: "Jane", age: 32 },
    ["description"],
];

const objectsOnly: object[] = pureDelete(mixedArrsy, (val) =>
    Array.isArray(val)
);

console.log(mixedArrsy, objectsOnly);
