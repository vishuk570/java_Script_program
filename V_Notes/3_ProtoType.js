// What is the prototype in JavaScript?

// JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
// JavaScript engine adds a prototype property inside    a function, Prototype property is basically 
// an object (also known as Prototype object), where we can attach methods and properties in a prototype object, 
// which enables all the other objects to inherit these methods and properties.

// // function constructor 
// function Person(name, job, yearOfBirth){    
//     this.name= name; 
//     this.job= job; 
//     this.yearOfBirth= yearOfBirth; 
// } 
// // this will show Person's prototype property. 
// console.log(Person.prototype); 


// function constructor 
// function Person(name, job, yearOfBirth){    
//     this.name= name; 
//     this.job= job; 
//     this.yearOfBirth= yearOfBirth; 
// } 
// Person.prototype.calculateAge= function(){ 
//     console.log('The current age is: '+(2019- this.yearOfBirth)); 
// } 
// console.log(Person.prototype); 



  
 // function constructor 
 function Person(name, job, yearOfBirth){   
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){  
    console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 
  
// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986);  
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 
  
Person1.calculateAge(); 
Person2.calculateAge(); 