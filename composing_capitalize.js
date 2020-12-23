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

// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
    return snake_case_string.split('_');
}

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

// Takes an ["array", "of", "strings"] and returns a camelized ["array", "Of", "Strings"]
function capitalizeAll(stringArray) {
    return map(capitalizeFirstLetter, stringArray);
}

function camelize(stringArray) {
    return [head(stringArray)].concat(capitalizeAll(tail(stringArray)));
}

function concatenate(stringArray) {
    return reduce((acc, str) => acc + str, '', stringArray);
}

function hyphenate(stringArray) {
    return reduce(
        (acc, str) => [acc, str].join('-'),
        head(stringArray),
        tail(stringArray)
    );
}

function map(fn, array) {
    if (length(array) === 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
}


function reduce(reducerFn, initialValue, array) {
    if (length(array) === 0) return initialValue;
    const newInitialValue = reducerFn(initialValue, head(array));
    return reduce(reducerFn, newInitialValue, tail(array));
}

// Takes a "snake_case_string" and returns a "camelCaseString"
function snakeToCamel(snake_case_string) {
    const pipe = pipeline(desnake, camelize, concatenate);
    return pipe(snake_case_string);
}

// Return the number of items in an array
function length(array) {
    return array.length;
}

console.log(snakeToCamel("super_cool_variable"));
console.log(snakeToCamel("very_long_variables_should_also_work"));