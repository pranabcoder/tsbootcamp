// console.log('Your code goes here...');
/**
 * Adds two numbers together and optionally logs the result.
 * @param n1 The first number.
 * @param n2 The second number.
 * @param showResult Whether to log the result to the console. Defaults to false.
 * @param resultPhrase A custom phrase to precede the result. Defaults to 'The sum of'.
 * @returns The sum of the two numbers.
 */
function add(n1, n2, showResult, resultPhrase) {
    if (showResult === void 0) { showResult = false; }
    if (resultPhrase === void 0) { resultPhrase = 'The sum of'; }
    var result = n1 + n2;
    if (showResult) {
        console.log("".concat(resultPhrase, " ").concat(n1, " and ").concat(n2, " is ").concat(result));
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'The sum of';
add(number1, number2, printResult, resultPhrase);
