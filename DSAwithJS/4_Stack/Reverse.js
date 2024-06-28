// Reverse String with Stack
let newArr = []
let size = newArr.length;

function push(val){
    newArr[size] = val
    size++
}

function pop(){
    let lastVal = newArr[size-1]
    size--;
    newArr.length = size
    return lastVal
}

function revreseStr(item){
    for(let i=0; i<item.length; i++){
        push(item[i])
    }
    for(let i=0; i<item.length; i++){
        item[i] = pop()
    }
}

let str = "Hello World"
let arr = str.split(''); // convert string to array
console.log("arr",arr);
revreseStr(arr)
console.log("arr",arr.join('')); // convert array to string
