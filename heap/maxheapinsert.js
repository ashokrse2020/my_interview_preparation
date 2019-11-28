class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubble();
    }
    bubble(){
        let childElementIndex = this.values.length - 1;
        let childElement = this.values[childElementIndex];
        while(childElementIndex > 0){
            let parentElementIndex = Math.floor((childElementIndex - 1)/2);
            let parentElement = this.values[parentElementIndex];
            if(childElement < parentElement) {
                break;
            }
            else {
                this.values[parentElementIndex] = childElement;
                this.values[childElementIndex] = parentElement;
                childElementIndex = parentElementIndex;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);