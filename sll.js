class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Sll{
  constructor(){
    this.head = null;
  }

  push(val){
    const newNode = new Node(val);

    if (this.head === null) {
       this.head = newNode;
       console.log(val + " is pushed.");
    } 
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      console.log(val + " is pushed.")
    }
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log("The values are : " + current.val);
      current = current.next;
    }
  }

  pop(val){
    this.current = this.head
    this.current1 = this.current
    while(this.current.next === null){
        this.current1.next = null;
    }
     console.log(val + " is popped.")
  }
}

const obj = new Sll();
obj.push(10);
obj.push(20);
obj.push(30); 
obj.push(50);
obj.push(69);

obj.traverse();

obj.pop(30);