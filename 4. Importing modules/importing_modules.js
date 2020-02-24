// We will see how to use npm packages in our project. WE can use these packages, will save us from reinventing the wheel

//  # Run the command, "npm init"  in your root directory of the project, it will configure npm for your project and creates a file 'packages.json'


// We will be using an npm package called 'validator'  and use it as an example. It validates strings and  crap.

// I ran ' npm install validator@10.8.0 ' to add the package in.



//  The docs for the validator package can be found here: https://www.npmjs.com/package/validator   look around if you want.

const validator = require('validator')    // Storing the package thing in a const here. 

console.log(validator.isEmail("srihari@abc.com"))   // checking for valid emails.


console.log(validator.isEmail('farts.balls'))   // checking for valid emails.


console.log(validator.isURL('superslosher.noob'))

