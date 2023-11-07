let casesName = "Allama Iqbal";
console.log(`To upper case  : `, casesName.toUpperCase());
console.log(`To lower case  : `, casesName.toLowerCase());
function toTitlecase(value) {
    return value
        .split(` `)
        .map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
        .join(` `);
}
console.log(`To Title Case :`, toTitlecase(casesName));
export {};
