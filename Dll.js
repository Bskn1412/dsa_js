class Node{
   constructor(val){
    this.val = val;
    this.next = null;
   }
}

class Dll{
    constructor(){
        this.head = null;
    }

    push(val){
       const newNode = new Node(val);

       while(this.head.next !== null){
            this.head.next = newNode;
            
       }
    }
}
