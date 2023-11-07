// Part A
import {allGuest, friendNames } from "./ex15.js";
console.log(`\n\nEx 16 : Start Here \n`);
console.log(`Some Updates about Party : Now we are arranging a big party.`)
// Part B
friendNames.unshift(`Akbar`);
allGuest.unshift(`Akbar`);
//Part C
friendNames.splice(1,((friendNames.length)/2)+1,"Aziz")
allGuest.splice(1,0,"Aziz")
console.log(friendNames);
//Part D

function append(friendNames: string[], index: number, value: string) {
    friendNames.splice(index, 0, value);
  }
append(friendNames , (friendNames.length) , `Burhan`);
append(allGuest , 0 , `Burhan`);

console.log(friendNames);
//Part E
friendNames.forEach((value) => {
    console.log(`"Join me for a delightful dinner, ${value} ! Let's create unforgettable memories together."`);
});


export{allGuest,friendNames};