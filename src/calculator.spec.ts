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

});