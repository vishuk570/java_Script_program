// Clousers : A closure is the combination of a function bundled together with the lexical environment.

// In other words, a closure gives access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// example 1: 
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();


// example 2:
function fn1() {
    const name = "Mozilla";
    function fn2() {
      console.log(name);
    }
    return fn2;
  }
  
const myFn = fn1();
console.log(myFn); // [Function: fn2]
myFn(); // Mozilla