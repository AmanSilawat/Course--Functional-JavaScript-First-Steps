function pipeline(...functions) {
    if (functions.length === 0) return input => input;
    if (functions.length === 1) return input => head(functions)(input);
    return function (input) {
        return pipeline(...tail(functions))(head(functions)(input));
    };
}

// Return the rest of an array after the first item
function tail(array) {
    console.log(array);
    return array.slice(1);
}

// Return the first item in an array
function head(array) {
    return array[0];
}

pluralize = singularWord => singularWord + 's';
heart = word => "I ❤️ " + word;
exclaim = sentence => sentence + "!";

let showSomeLove = pipeline(pluralize, heart, exclaim);
let pipelineLove = showSomeLove('pipeline')

console.log(pipelineLove); // I ❤️ pipelines!
