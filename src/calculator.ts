export class Calculator {

    private numbers: number[] = [];

    calculate(input: string) {
        if (input.length === 0)
            return 0;
        let lines = input.split(/\n/g);
        for (let line of lines) {
            let ln = line.split(',');
            ln.forEach(n => this.numbers.push(+n));
        }
        return this.numbers.reduce((a, b) => a + b);
    }

}