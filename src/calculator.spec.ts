import {Calculator} from "./calculator";


describe('calculator', () => {

    let cut: Calculator;

    beforeEach(() => {
        cut = new Calculator();
    });

    it('should be able to initialize the calculator', () => {
        expect(cut).toBeDefined();
    });

    it('should return 0 if given an empty string', () => {
        expect(cut.calculate('')).toBe(0);
    });

    it('should return 1 if called with "1"', () => {
        expect(cut.calculate('1')).toBe(1);
    });

    it('should give result 3 when called with "1,2"', () => {
        expect(cut.calculate('1,2')).toBe(3);
    });

    it('should handle multiple numbers', () => {
        expect(cut.calculate('1,2,3,4,5')).toBe(15);
    });

    it('should support newline instead of comma as delimiter', () => {
        expect(cut.calculate('1,2\n3')).toBe(6);
    });

    it('should support custom delimiters', () => {
        expect(cut.calculate('//;\n1;2')).toBe(3);
    });

    it('should throw if called with negative number', () => {
        try {
            cut.calculate('-1');
            fail('error should have been thrown');
        } catch (err) {}
    });

    it('should display an error message with numbers that are wrong', () => {
        try {
            cut.calculate('-1,-2,-3');
            fail('error should have been thrown');
        } catch (err) {
            expect(err).toBe('Negatives found: -1,-2,-3');
        }
    });

    it('should ignore numbers above 1000', () => {
        expect(cut.calculate('2,1001')).toBe(2);
    });

    it('should be able to handle custom delimiters of any length', () => {
        expect(cut.calculate('//[%%]\n1%%2%%3')).toBe(6);
    });
});