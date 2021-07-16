const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000;

export default class PrettyNumberPrinter {
    constructor(private truncateLength: number) { }

    public prettify(n: number): string {
        if (typeof n !== 'number' || n < 0) {
            throw new Error('Can only prettify numbers greater than 0');
        }

        if (n < million) {
            return n.toString();
        }
        let divisor = 1;
        let suffix = '';
        if (n >= million && n < billion) {
            divisor = million;
            suffix = 'M';
        }
        else if (n >= billion && n < trillion) {
            divisor = billion;
            suffix = 'B';
        }
        else {
            divisor = trillion;
            suffix = 'T';
        }
        let shortened = (n / divisor).toFixed(this.truncateLength);

        // trimming if shortened number is an integer
        if (shortened[shortened.length - 1] === '0') {
            shortened = shortened.slice(0, shortened.length - 2);
        }

        // handling edge case where rounding bumps us up to the next tier
        if (shortened === '1000') {
            if (divisor === million) {
                shortened = '1';
                suffix = 'B';
            }
            if (divisor === billion) {
                shortened = '1';
                suffix = 'T';
            }
        }

        return `${shortened}${suffix}`;
    }
}