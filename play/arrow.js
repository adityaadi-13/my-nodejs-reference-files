//const sqr=(x)=>x*x
//console.log(sqr(25))

const data=
{
    company:'EZMATA',
    employees:['Aditya','Shubham','Srihari','Rishi'],
    printdata(){
        console.log("Company Name is :"+this.company)
        var i=1
        this.employees.forEach((employee)=>{
            console.log(i + "Employee is : "+employee)
            i++

        })
    }

}

data.printdata()