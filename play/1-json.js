//including file stream module in code
const fs=require('fs')
//creating a javascript object
const data={
    name:"Aditya Sharma",
    com:"Ezmata Technologies",
    desg:"REsearch Associate"
}
//converting the js object in json string
const jdata=JSON.stringify(data)
//writing the json string into json file
fs.writeFileSync('json_data.json',jdata)
//reading a json file
const db=fs.readFileSync('json_data.json')//it returns a data buffer
//printing the data buffer
console.log(db)
//converting data buffer into string
rdata=db.toString()
//converting string into js object
odata=JSON.parse(rdata)
console.log(odata.desg)