export class Calculator {

    private numbers: number[] = [];

    calculate(input: string) {
        let data = {
            input: input,
            delimiters: [],
            tokens: []
        };

        if (data.input.length === 0)
            return 0;

        this.populateDelimiters(data);
        console.log('data', data);

        this.splitByDelimiters(data);

        data.tokens.forEach(n => this.numbers.push(+n));

        let negatives = this.numbers.filter((number) => number < 0);

        if (negatives.length === 0)
            return this.numbers
                .filter((number) => number < 1000)
                .reduce((a, b) => a + b);

        throw 'Negatives found: ' + negatives.toString();
    }

    private populateDelimiters(data) {
        data.delimiters.push(',', '\n');
        if (data.input.indexOf('//') === 0) {
            if (data.input.indexOf('//[') === 0) {
                let customDelimiter = data.input.substring(3, data.input.lastIndexOf(']'));
                data.delimiters.push(customDelimiter);
            } else {
                data.delimiters.push(data.input.charAt(2));
            }
            data.input = data.input.substring(
                data.input.lastIndexOf('\n') + 1,
                data.input.length
            );
        }
    }

    private splitByDelimiters(data) {
        let delimiterString = data.delimiters.join('|');
        let regExp = new RegExp(delimiterString, 'g');
        data.tokens = data.input.split(regExp);
    }

}