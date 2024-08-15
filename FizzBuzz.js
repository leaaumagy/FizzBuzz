const readline = require('readline');

function fizzBuzzProcess(value) {
    // FizzBuzz rule
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

function FizzBuzz(input) {
    // Applies the FizzBuzz rule to each element of the input if it's iterable.
    if (typeof input === 'number') {
        return [fizzBuzzProcess(input)];
    } else if (Array.isArray(input)) {
        return input.map(fizzBuzzProcess);
    } else if (input instanceof Set) {
        return new Set([...input].map(fizzBuzzProcess));
    } else if (input instanceof Map) {
        const result = new Map();
        input.forEach((value, key) => {
            result.set(key, fizzBuzzProcess(value));
        });
        return result;
    } else if (typeof input === 'object' && input !== null) {
        const result = {};
        for (let key in input) {
            if (input.hasOwnProperty(key)) {
                result[key] = fizzBuzzProcess(input[key]);
            }
        }
        return result;
    } else {
        throw new TypeError("Input must be a number, array, set, map, or object.");
    }
}

function parseInput(inputString) {
    try {
        // Safely parse JSON input
        return JSON.parse(inputString);
    } catch (e) {
        throw new TypeError("Invalid input format. Please provide valid JSON.");
    }
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number, array, set, map, or object in JSON format: ', (user_input) => {
        try {
            const user_input_parsed = parseInput(user_input);
            const result = FizzBuzz(user_input_parsed);
            console.log("Result:", result);
        } catch (error) {
            console.error(`Error: ${error.message}. Please provide a valid number, array, set, map, or object.`);
        } finally {
            rl.close();
        }
    });
}

main();
