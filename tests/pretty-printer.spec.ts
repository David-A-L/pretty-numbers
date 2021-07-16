import { PrettyNumberPrinter } from "../src";

test("should handle edge cases", () => {
    const pnp = new PrettyNumberPrinter(1);
    expect(pnp.prettify(0)).toEqual('0');
    expect(pnp.prettify(999999)).toEqual('999999');
    expect(pnp.prettify(1000000)).toEqual('1M');
    expect(pnp.prettify(999999999)).toEqual('1B');
    expect(pnp.prettify(1000000000)).toEqual('1B');
    expect(pnp.prettify(999999999999)).toEqual('1T');
    expect(pnp.prettify(1000000000000)).toEqual('1T');
    expect(pnp.prettify(Number.MAX_SAFE_INTEGER)).toEqual('9007.2T');
});

test("should round number correctly", () => {
    const pnp = new PrettyNumberPrinter(1);
    expect(pnp.prettify(0.00012)).toEqual('0.00012');
    expect(pnp.prettify(1000001)).toEqual('1M');
    expect(pnp.prettify(1040000000)).toEqual('1B');
    expect(pnp.prettify(1050000000000)).toEqual('1.1T');
    expect(pnp.prettify(19123000000000)).toEqual('19.1T');
});