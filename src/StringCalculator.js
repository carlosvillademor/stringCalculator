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
    var total = operator === '+' ? 0 : parseInt(operands[0]);
    for (var i = 0; i < operands.length; i++) {
        if(operator === '+') {
            total += parseInt(operands[i]);
        }
        if(operator === '-' && i>0) {
            total -= parseInt(operands[i]);
        }
    }
    return total;
}
function extractOperandsFrom(expression, operator) {
    return expression.split(operator);
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
    if (expression.indexOf('-') > -1) operator = '-';
    return operator;
}

StringCalculator.prototype.evaluate = function (expression) {
    if (!expression) return 0;
    exitIfExpressionContainsCharacters(expression);
    exitIfThereAreMoreThanOneTypeOfOperator(expression);

    var operator = determineOperatorFrom(expression);
    var operands = extractOperandsFrom(expression, operator);
    exitIfThereAreMoreThanTwoOperands(operands);

    return evaluate(compact(operands), operator);
};