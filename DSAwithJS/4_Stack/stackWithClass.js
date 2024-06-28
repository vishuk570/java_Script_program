class Stack{
    item=[];
    currentSize;
    maxSize;
    constructor(size){
        console.log("call",size);
        this.maxSize = size
        this.currentSize = this.item.length
    }
    push(newVal){
        if(this.currentSize>=this.maxSize){
            console.log('Stack is overflow');
        } else {
            this.item[this.currentSize] = newVal
            this.currentSize++;
        }
    }
    pop(){
        if(this.currentSize>0){
            this.currentSize--;
            this.item.length = this.currentSize;
        } else {
            console.log("Stack is Empty");
        }
    }
    display(){
        console.log(this.item);
    }
}

st = new Stack(5)
st.push(20)
st.push(21)
st.push(22)
st.push(23)
st.push(24)
st.pop()
st.pop()
st.pop()
st.pop()
st.display();