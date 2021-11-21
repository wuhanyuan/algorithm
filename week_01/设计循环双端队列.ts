class MyCircularDeque {
  private count = 0;
  private last = -1;
  private stack = [];
  private limit = 0;

  constructor(k: number) {
    this.limit = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.stack.unshift(value);
    this.count++;
    this.last++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.stack.push(value);
    this.count++;
    this.last++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.stack.shift();
    this.count--;
    this.last--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.stack.pop();
    this.count--;
    this.last--;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[0];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[this.last];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.limit;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */







