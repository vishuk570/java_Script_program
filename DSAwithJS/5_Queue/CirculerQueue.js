class CirculerQueue{
    constructor(size){
        this.max = size;
        this.item = new Array(size);
        this.currentSize = 0;
        this.front = -1;
        this.rear = -1
    }
    enqueue(val){
        if(this.currentSize >= this.max){
            console.log("Queue is full");
        } else {
            if(this.rear == this.max-1){
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.item[this.rear] = val;
            this.currentSize++;
            if(this.front == -1){
                this.front = this.rear;
            }
        }
    }

    dequeue(){
        if(this.currentSize == 0){
            this.front=-1;
            this.rear=-1
            console.log("Queue is empty");
        } else {
            this.item[this.front] = null;
            if(this.front == this.max-1){
                this.front=0
            } else {
                this.front++
            }
            this.currentSize--;
        }
    }

    display(){
        console.log("item",this.item);
    }
}

let queue = new CirculerQueue(5)
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.display()