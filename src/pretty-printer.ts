export default class PrettyNumberPrinter {
    // TODO the actual logic of printing here
    constructor(private truncateLength: number) {

    }

    public prettify(n: number): string {
        return n.toString();
    }
}