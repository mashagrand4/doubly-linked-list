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
        return this;
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

    insertAt(index, data) {
        var tempNode = this._tail;
        while (index < this.length-1){
            tempNode = tempNode.prev;
            index++;
        }
        tempNode.data = data;
        return this;
    }

    isEmpty() {
        if (!this.length){
            return true;
        }else{
            return false;
        }
    }

    clear() {
        this._tail = this._head = new Node();
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var listVal = [];
        for(var i = 0; i<this.length; i++){
            listVal.push(this.at(i));
        }
        var listDeleted = listVal.splice(index,1);
        this.length = this.length-1;
        for(i = 0; i < listDeleted.length; i++){
            this.insertAt(i,listDeleted[i]);
        }
        return this;
    }

    reverse() {
        var listVal = [];
        for(var i = 0; i<this.length; i++){
            listVal.push(this.at(i));
        }
        var listRevVal = listVal.reverse();

        for(i = 0; i < listRevVal.length; i++){
            this.insertAt(i,listRevVal[i]);
        }
        return this;
    }

    indexOf(data) {
        var i = 0;
        while (i < this.length){
            if(data == this.at(i)){
                return i;
            }
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
