// Remember, Docs is the best way to figure things out. Here's a link to docs: https://nodejs.org/docs/latest-v11.x/api/

// Now you need to import fs library here to use it, We do that in nodejs as below.



const fs = require('fs')


//fs.writeFileSync('testNote.txt', 'This file is created by NodeJs. Very coool, right?')


// Below is a challange, to append something to the file we just created. 

fs.appendFileSync('testNote.txt', '    This line is appended using a NodeJs script as well. Hurrah! ')