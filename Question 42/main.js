/*Ex42
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see
that the list has actually been modified.*/
let magicianName = [`Rock`, `Jone`, `David`, `Sondar`];
function make_great(name) {
    magicianName.forEach((name) => {
        console.log(`The Great ${name}, Now Finally coming to perfome`);
    });
}
make_great(magicianName);
export {};
