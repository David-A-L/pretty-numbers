
import { Command } from 'commander';
import PrettyNumberPrinter from './pretty-printer';

const program = new Command();
program.version('1.0.0');

program
    .argument('<num>')
    .option('-t, --truncate <length>', 'number of digits to truncate numbers to', '2')
    .action((num, options) => {
        const pnp = new PrettyNumberPrinter(Number.parseInt(options.truncate, 10));
        console.log(pnp.prettify(num));
    });
program.parse();
