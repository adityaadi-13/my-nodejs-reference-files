
// // $$$$$$$$$$$$$  Things in the tutorial  $$$$$$$$$$$$$$$$$$$$$$$$$
 




// //NOTES:

// // we need to provide a relative path to the file always.
// // Also, when we import files like this, the js actually executes the imported file fully first. Beware!

// // Now, just  because you are importing a file, doesn't mean it readily imports variables and methods from it. For that,
// // you need to export them from the said 'other file', to see this, opent the otherfile in this directory.


// // You can import like this if you just want to execute something in a file you are importing.

// //          require('./theotherfile.js')


// // If you are exporting something from a file, you need to store the returned crap into a var or something, like so...

// var variableinotherfile = require('./theotherfile.js')


// var p = "The variable in this file"

// console.log(p)
// console.log(variableinotherfile)




// // You can bloody return a function if you need.


// uncomment upto above this for tut code. below is the chhallenge code.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// $$$$$$$$$$$$$  The challenge for the video  $$$$$$$$$$$$$$$$$$$$$$$$$
 


// Create a file, return a function from that file, use it in this file to do something.

// Creating a notes.js file in this directory and you can open this to see what it does.


// The notes.js returns a function. we call that.

const instance = require('./notes.js')


console.log(instance())