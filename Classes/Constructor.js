class CompanyName  
{  
  constructor()  
  {  
    this.company="JavaScript";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  //call the parent class constructor
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
console.log(emp.id+" "+emp.name+" "+emp.company);  