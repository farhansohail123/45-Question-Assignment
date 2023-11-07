import {allGuest, friendNames} from "./ex14.js";
console.log(`Ex 15 : Start Here \n`);
// friendNames.map((friendNames) =>{
// console.log(`"Join me for a delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
// })
// Part A
let whoNot=friendNames.pop();
console.log(`\n"Sorry to hear you can't make it, ${whoNot}. We'll miss your presence at the dinner party."\n`)
console.log(friendNames);
//Part B
//adding new name Kamran on the place of zeeshan
friendNames.push(`Zamaan`);
console.log(friendNames);
//Part C
friendNames.map((friendNames: string ) =>{
    console.log(`"New invitation, A delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
    })
allGuest.push(`Zamaan`);

export { allGuest,friendNames };