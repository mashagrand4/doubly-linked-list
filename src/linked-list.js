const Node = require('./node');

class LinkedList {
    constructor() {
        this._tail = null;
        this._head = null;
        this.length = 0;
    }
    append(data) {
        if(this._tail == null){
            this._tail = new Node(data);
            this._head = this._tail;
        }else{
            var temp = new Node(data);
            this._tail.next = temp;
            temp.prev = this._tail;
            this._tail = temp;
        }
        this.length++;
    }
    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var tempNode = this._tail;
        while (index < this.length-1){
            tempNode = tempNode.prev;
            index++;
        }
        return tempNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {
        if (!this.length){
            return true;
        }else{
            return false;
        }
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
