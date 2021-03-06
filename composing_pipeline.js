function pipeline(...functions) {
    if (functions.length === 0) return input => input;
    if (functions.length === 1) return input => head(functions)(input);
    return function (input) {
        return pipeline(...tail(functions))(head(functions)(input));
    };
}

// Return the rest of an array after the first item
function tail(array) {
    return array.slice(1);
}

// Return the first item in an array
function head(array) {
    return array[0];
}

pluralize = singularWord => singularWord + 's';
heart = word => "I ❤️ " + word;
exclaim = sentence => sentence + "!";

// Let's make double sure pipeline applies functions in the right order:
let showSomeLove = pipeline(pluralize, heart, exclaim);
let pipelineLove = showSomeLove('pipeline')
console.log(pipelineLove); // I ❤️ pipelines!


// And let's make sure we can even compose pipelines (after all, a pipelined function is just another function we can pass to pipeline!):
let composedPipe = pipeline(pluralize, pipeline(heart, exclaim))
let compositionLove = composedPipe('pipeline')
console.log(compositionLove); // I ❤️ pipelines!


let composedPipe2 = pipeline(pipeline(pluralize, heart), exclaim)
let compositionLove2 = showSomeLove('pipeline')
console.log(compositionLove2); // I ❤️ pipelines!