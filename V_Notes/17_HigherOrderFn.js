// Higher-order-function : 
// A function that takes other functions as arguments or returns a function or is known a higher-order function.

// Example-1:
function x(){    // x is callback function.
    console.log("Hello");
}

function y(x){   // y is higher-order-function
    x()
}




// Example-2:
const radius = [3, 1, 4, 2]  // find the Area, Circumference And Diamete of the radius of circle.

const area = (radius) =>{
    return Math.PI * radius * radius;
}

const circumFerence = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const calculate = (arr,logic) => {
    const output = [];
    for(let i=0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output;
}


console.log(calculate(radius,area));
console.log(calculate(radius,circumFerence));
console.log(calculate(radius,diameter));
