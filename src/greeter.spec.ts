/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Greeter from './greeter';

describe('Sayings Greeter', () => {

    it('should be possible to greet in danish', () => {
        let greeter = new Greeter();
        expect(greeter.danishGreet('Hej')).toBe('Hej');
        expect(greeter.danishGreet('Hejsa')).toBe('Hejsa');
        expect(greeter.danishGreet('Goddag')).toBe('Goddag');
    });

    it('should be possible to great in english', () => {
        let greeter = new Greeter();
        expect(greeter.englishGreet('Hi')).toBe('Hi');
    });
});
