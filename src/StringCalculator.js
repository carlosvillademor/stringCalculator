function StringCalculator() {
}

function compact(operands) {
    var compactedOperands = [];
    for (var i = 0; i < operands.length; i++) {
        if (operands[i]) {
            compactedOperands.push(operands[i]);
        }
    }
    return compactedOperands;
}
function evaluate(operands, operator) {
    var total = 0;
    for (var i = 0; i < operands.length; i++) {
        total += parseInt(operands[i]);
    }
    return total;
}
function extractOperandsFrom(expression) {
    return expression.split('+');
}

function exitIfExpressionContainsCharacters(expression) {
    if (expression.match(/([a-z]|[A-Z])+/)) throw new Error('No letters allowed');
}

function exitIfThereAreMoreThanTwoOperands(operands) {
    if (operands.length > 2) throw new Error('Too many operands on your expression');
}

function exitIfThereAreMoreThanOneTypeOfOperator(expression) {
    var hasPlusOperand = expression.indexOf('+') > -1;
    var hasSubtractOperator = expression.indexOf('-') > -1;
    if (hasPlusOperand && hasSubtractOperator) {
        throw new Error("Too many operators");
    }
}

function determineOperatorFrom(expression) {
    var operator = '+';
    if (expression.indexOf('+') > -1) operator = '+';
//    if (expression.indexOf('-') > -1) operator = '-';
    return operator;
}

StringCalculator.prototype.evaluate = function (expression) {
    if (!expression) return 0;
    exitIfExpressionContainsCharacters(expression);
    exitIfThereAreMoreThanOneTypeOfOperator(expression);

    var operator = determineOperatorFrom(expression);
    var operands = extractOperandsFrom(expression);
    exitIfThereAreMoreThanTwoOperands(operands);

    return evaluate(compact(operands), operator);
};