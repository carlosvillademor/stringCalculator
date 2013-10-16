function StringCalculator() {
}

function compact(operands) {
    var compactedOperands = [];
    for(var i=0; i<operands.length; i++){
        if(operands[i]) {
            compactedOperands.push(operands[i]);
        }
    }
    return compactedOperands;
}
function sum(operands) {
    var total = 0;
    for (var i = 0; i < operands.length; i++) {
        total += parseInt(operands[i]);
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
    var compactedOperands = compact(operands);
    return sum(compactedOperands);
};