// Part A
import {allGuest, friendNames } from "./ex16.js";
console.log(`\n\nEx 17 : Start Here \n`);
console.log(`The table for big dinner will not arriving that why I apologise for dinner big party\nHere I have space of 2 guest.`);

// Part B

console.log(friendNames);

for (let i=0;i<(friendNames.length);i++)
{ console.log(`We are sorry ${friendNames.pop()},that you would not be attend the party.`);}

console.log(friendNames);
//Part C
let a = friendNames.length;
console.log(friendNames.length);
for (let i=0;i<a;i++)
{console.log(`Who they are still invited for party : ${friendNames[0]}`);
//Part D
friendNames.shift();}
console.log(`Guest List : ${friendNames}`);
export {allGuest,friendNames};