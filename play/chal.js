const fs=require('fs')
const databuffer=fs.readFileSync('abc.json')
xx=databuffer.toString()
data=JSON.parse(xx)
data.name="Aditya"
data.age=21
rdata=JSON.stringify(data)
fs.writeFileSync('abc.json',rdata)
