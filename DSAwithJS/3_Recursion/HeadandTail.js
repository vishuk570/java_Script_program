// Tail Recursion 
function TailFun(n){
    if(n>0){
        console.log("Tail Recursion",n);
        TailFun(n-1)
    }
}
TailFun(5)

// Head Recursion 
function HeadFun(n){
    if(n>0){
        HeadFun(n-1)
    }
    console.log("Head Recursion",n);
}
HeadFun(5)