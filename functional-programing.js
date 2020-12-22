// Not pure :function
let name = "userName1";

function greet() {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, userName1!

name = "userName2";
greet(); // Hello, userName2!






// Pure function
function greet(name) {
    return `Hello, ${name}!`;
}

greet("userName1"); // "Hello, userName1!"
greet("userName2"); // "Hello, userName2!"