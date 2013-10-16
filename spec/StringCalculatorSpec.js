describe('StringCalculator', function() {

    var stringCalculator = new StringCalculator();

    it('should return zero for empty string', function(){
        expect(stringCalculator.evaluate('')).toBe(0);
    });

    it('should return 1 if passed the number 1', function() {
        expect(stringCalculator.evaluate('1')).toBe(1);
    });

    it('should return number if passed a single number with operator', function() {
        expect(stringCalculator.evaluate('1+')).toBe(1);
        expect(stringCalculator.evaluate('1-')).toBe(1);
    });

    it('should return result for expression', function() {
        expect(stringCalculator.evaluate('1+1')).toBe(2);
    });

    it('should return zero if null is passed in', function(){
        expect(stringCalculator.evaluate(null)).toBe(0);
    });

    it('should throw an exception if there is more than one operator of the same type', function(){
        expect(function(){stringCalculator.evaluate("1+2+3")}).toThrow();
    });

    it('should throw an exception if there is more than type of operator', function(){
        expect(function(){stringCalculator.evaluate("1+2-3")}).toThrow();
    });

    it('should throw an exception if there is a non-number operand', function(){
        expect(function(){stringCalculator.evaluate("1a")}).toThrow();
        expect(function(){stringCalculator.evaluate("1A")}).toThrow();
        expect(function(){stringCalculator.evaluate("1+A")}).toThrow();
    });

});