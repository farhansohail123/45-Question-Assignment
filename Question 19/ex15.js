"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendNames = exports.allGuest = void 0;
const ex14_js_1 = require("./ex14.js");
Object.defineProperty(exports, "allGuest", { enumerable: true, get: function () { return ex14_js_1.allGuest; } });
Object.defineProperty(exports, "friendNames", { enumerable: true, get: function () { return ex14_js_1.friendNames; } });
console.log(`Ex 15 : Start Here \n`);
// friendNames.map((friendNames) =>{
// console.log(`"Join me for a delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
// })
// Part A
let whoNot = ex14_js_1.friendNames.pop();
console.log(`\n"Sorry to hear you can't make it, ${whoNot}. We'll miss your presence at the dinner party."\n`);
console.log(ex14_js_1.friendNames);
//Part B
//adding new name Kamran on the place of zeeshan
ex14_js_1.friendNames.push(`Zamaan`);
console.log(ex14_js_1.friendNames);
//Part C
ex14_js_1.friendNames.map((friendNames) => {
    console.log(`"New invitation, A delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`);
});
ex14_js_1.allGuest.push(`Zamaan`);
