// non primitive Types in javascript

// Object
// 1
emp = { id: 102, name: "Shyam Kumar", salary: 40000 }
document.write(emp.id + " " + emp.name + " " + emp.salary);

// 2 
var objectname = new Object();
emp.id = 101;
emp.name = "Ravi Malik";
emp.salary = 50000;
document.write(emp.id + " " + emp.name + " " + emp.salary);

// Array
// 1
var emp = ["Sonoo", "Vimal", "Ratan"];
for (i = 0; i < emp.length; i++) {
    document.write(emp[i] + "<br/>");
}
// 2
var emp = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";

// RegExp
var string = " Learn Javascript scripting language now ";
var result = new RegExp("script", "g");
var obj = result.test(string);
document.write("Matching and Return value : " + obj);   