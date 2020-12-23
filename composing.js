var ender = (ending) => (input) => input + ending;

let hello = ender(' Rock');
let budy = ender(' Budy');
let exclaim = ender('!');

let hypeUp = (x) => exclaim(budy(hello(x)));

console.log(hello('hello,'));
console.log(exclaim(budy('hello,')));
console.log(exclaim('hello,'));

console.log(hypeUp('JS'));