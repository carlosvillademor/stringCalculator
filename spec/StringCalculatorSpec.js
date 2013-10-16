describe('StringCalculator', function() {

    var stringCalculator = new StringCalculator();

    it('should return zero when expression is empty string', function(){
        expect(stringCalculator.evaluate('')).toBe(0);
    });

    it('should return zero when expression is null', function(){
        expect(stringCalculator.evaluate(null)).toBe(0);
    });

    it('should return number when expression is one operand', function() {
        expect(stringCalculator.evaluate('1')).toBe(1);
    });

    it('should return number when expression is an operand followed by an operator', function() {
        expect(stringCalculator.evaluate('1+')).toBe(1);
        expect(stringCalculator.evaluate('1-')).toBe(1);
    });

    it('should evaluate expression with two operands and an operator', function() {
        expect(stringCalculator.evaluate('1+1')).toBe(2);
    });

    it('should throw an exception when there are more than one operator of the same type in the expression', function(){
        expect(function(){stringCalculator.evaluate("1+2+3")}).toThrow();
    });

    it('should throw an exception when there are more than one type of operator in the expression', function(){
        expect(function(){stringCalculator.evaluate("1+2-3")}).toThrow();
    });

    it('should throw an exception when there is a non-numeric operand in the expression', function(){
        expect(function(){stringCalculator.evaluate("1a")}).toThrow();
        expect(function(){stringCalculator.evaluate("1A")}).toThrow();
        expect(function(){stringCalculator.evaluate("1+A")}).toThrow();
    });

});