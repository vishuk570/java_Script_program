let arr = [];
let size = arr.length;
let maxEl = 10;
console.log(arr,size,maxEl);

function pushEl(val){
    if(size>=maxEl){
        console.log("Stack is Overflow");
    } else {
        arr[size]=val
        size++;
    }
    
}

function popEl(){
    if(size<=0){
        console.log("Stack is Empty");
    } else{
        size--;
        arr.length = size
    }
}

pushEl(10)
pushEl(12)
popEl()
popEl()
popEl()
console.log(arr);
