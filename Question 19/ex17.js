"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
// Part A
const ex16_js_1 = require("./ex16.js");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex16_js_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex16_js_1.friendNames; } });
console.log(`\n\nEx 17 : Start Here \n`);
console.log(`The table for big dinner will not arriving that why I apologise for dinner big party\nHere I have space of 2 guest.`);
// Part B
console.log(ex16_js_1.friendNames);
for (let i = 0; i < (ex16_js_1.friendNames.length); i++) {
    console.log(`We are sorry ${ex16_js_1.friendNames.pop()},that you would not be attend the party.`);
}
console.log(ex16_js_1.friendNames);
//Part C
let a = ex16_js_1.friendNames.length;
console.log(ex16_js_1.friendNames.length);
for (let i = 0; i < a; i++) {
    console.log(`Who they are still invited for party : ${ex16_js_1.friendNames[0]}`);
    //Part D
    ex16_js_1.friendNames.shift();
}
console.log(`Guest List : ${ex16_js_1.friendNames}`);
