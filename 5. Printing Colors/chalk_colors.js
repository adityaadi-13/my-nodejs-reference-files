// Install 2.4.1 version of an npm package named 'chalk'  
// Print something with green colour in terminal with this then.



const chalk = require('chalk')


console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring ') +
    chalk.black.bgGreen('that turns a line with green background now.')
));