"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
// Part A
const ex15_js_1 = require("./ex15.js");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex15_js_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex15_js_1.friendNames; } });
console.log(`\n\nEx 16 : Start Here \n`);
console.log(`Some Updates about Party : Now we are arranging a big party.`);
// Part B
ex15_js_1.friendNames.unshift(`Akbar`);
ex15_js_1.allGuest.unshift(`Akbar`);
//Part C
ex15_js_1.friendNames.splice(1, ((ex15_js_1.friendNames.length) / 2) + 1, "Aziz");
ex15_js_1.allGuest.splice(1, 0, "Aziz");
console.log(ex15_js_1.friendNames);
//Part D
function append(friendNames, index, value) {
    friendNames.splice(index, 0, value);
}
append(ex15_js_1.friendNames, (ex15_js_1.friendNames.length), `Burhan`);
append(ex15_js_1.allGuest, 0, `Burhan`);
console.log(ex15_js_1.friendNames);
//Part E
ex15_js_1.friendNames.forEach((value) => {
    console.log(`"Join me for a delightful dinner, ${value} ! Let's create unforgettable memories together."`);
});
