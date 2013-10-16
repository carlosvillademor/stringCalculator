function StringCalculator() {
}

function sumOnlyNumericValues(numbers, total) {
    if (numbers[i]) {
        total += parseInt(numbers[i]);
    }
    return total;
}
function sum(numbers) {
    var total = 0;

    for (i = 0; i < numbers.length; i++) {
        total = sumOnlyNumericValues(numbers, total);
    }
    return total;
}
function extractOperandsForAddition(expression) {
    return expression.split('+');
}

function exitIfExpressionContainsCharacters(expression) {
    if (expression.match(/([a-z]|[A-Z])+/)) throw new Error('No letters allowed');
}

function exitIfThereAreMoreThanTwoOperands(operands) {
    if (operands.length > 2) throw new Error('Too many operands on your expression');
}
StringCalculator.prototype.evaluate = function (expression) {
    if(!expression) return 0;
    exitIfExpressionContainsCharacters(expression);

    var operands = extractOperandsForAddition(expression);
    exitIfThereAreMoreThanTwoOperands(operands);
    return sum(operands);
};