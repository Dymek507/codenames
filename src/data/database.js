// import { words } from "./wordsDb.json";
const words = require("./wordsDb.json");
const fs = require("fs");

words.sort();
const uniq = [...new Set(words)];
const data = JSON.stringify(uniq);

fs.writeFileSync(`words-sorted.json`, data);
