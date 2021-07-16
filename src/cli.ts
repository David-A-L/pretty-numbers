
import { Command } from 'commander';
import PrettyNumberPrinter from './pretty-printer';

const program = new Command();
program.version('1.0.0');

program
    .argument('<num>')
    .option('-t, --truncate <length>', 'number of digits to truncate numbers to', '1')
    .action((num, options) => {
        const t = Number.parseInt(options.truncate, 10);
        if (!t && t !== 0) {
            console.error('truncate must be an integer');
            process.exit(1);
        }

        const n = Number.parseFloat(num);
        if (!n && n !== 0) {
            console.error('num must be a float');
            process.exit(1);
        }

        const pnp = new PrettyNumberPrinter(t);
        console.log(pnp.prettify(n));
    });
program.parse();
