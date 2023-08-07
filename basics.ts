// console.log('Your code goes here...');

/**
 * Adds two numbers together and optionally logs the result.
 * @param n1 The first number.
 * @param n2 The second number.
 * @param showResult Whether to log the result to the console. Defaults to false.
 * @param resultPhrase A custom phrase to precede the result. Defaults to 'The sum of'.
 * @returns The sum of the two numbers.
 */
function add(n1: number, n2: number, showResult: boolean = false, resultPhrase: string = 'The sum of'): number {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${resultPhrase} ${n1} and ${n2} is ${result}`);
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'The sum of';

add(number1, number2, printResult, resultPhrase);




