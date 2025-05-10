const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// user registration

const stu=[];

if (argv.student){
    stu.push(JSON.parse(argv.student));
}


console.log(stu);