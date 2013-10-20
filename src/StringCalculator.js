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

function containsPlusOperatorIn(expression){
    return expression.indexOf('+') > -1;
}

function containsMinusOperatorIn(expression){
    return expression.indexOf('-') > -1;
}
function ifThereAreCharactersIn(expression){
    return expression.match(/([a-z]|[A-Z])+/);
}

function exitIfThereAreMoreThanTwoOperands(operands) {
    if (operands.length > 2) throw new Error('Too many operands on your expression');
}

function ifThereAreDifferentOperatorsIn(expression) {
    return containsPlusOperatorIn(expression) && containsMinusOperatorIn(expression);
}

function determineOperatorFrom(expression) {
    var operator = '+';
    if (expression.indexOf('+') > -1) operator = '+';
    if (expression.indexOf('-') > -1) operator = '-';
    return operator;
}

function standardise(expression){
    if(!expression){
        return "0";
    }
    else{
        return expression;
    }
}

function reject(isTrue, message){
    if(isTrue){
        throw new Error(message);
    }
}

StringCalculator.prototype.evaluate = function (expression) {
    expression = standardise(expression);
    reject(ifThereAreCharactersIn(expression), "Error: Characters have been input");
    reject(ifThereAreDifferentOperatorsIn(expression), "Error: Too many operators have been input");
   
    var operator = determineOperatorFrom(expression);
    var operands = extractOperandsFrom(expression, operator);
    exitIfThereAreMoreThanTwoOperands(operands);
    return evaluate(compact(operands), operator);
};