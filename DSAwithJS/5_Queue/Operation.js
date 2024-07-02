let queue = [];
let currentSize = queue.length
let maxSize = 5;

function enqueue(numVal){
    if(currentSize>=maxSize){
        console.log('Queue is full');
        return;
    }
    queue[currentSize] = numVal;
    currentSize++;
}

function dequeue(){
    if(currentSize<=0){
        console.log("Queue is empty");
        return;
    }

    for(let i=0; i<queue.length; i++){
        queue[i] = queue[i+1];
    }
    currentSize--;
    queue.length = currentSize;
}

function isFront(){
    if(currentSize>0){
        console.log("Front Element of Queue",queue[0]);
    } else {
        console.log("Queue is empty");
    }
    
}

function isRear(){
    if(currentSize>0){
        console.log("Rear Element of Queue",queue[currentSize-1]);
    } else {
        console.log("Queue is empty");
    }
    
}


function display(){
    console.log(queue);
}

enqueue(5);
enqueue(6);
enqueue(7);
enqueue(8);
enqueue(9);
isFront();
isRear();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
display();