
let regexp: RegExp = new RegExp('shiva', 'gi');
console.log('Sjhv = ', regexp.test('Sjhv'), ' :: Shiva = ', regexp.test('Shiva'));

let values: Array<number> = [1, 2, 2, 3, 4, 4, 5];
console.log('Array: ', values);

let setValues: Set<number> = new Set(values);
console.log('Set: ', setValues);

class Queue<T> {

    private data: Array<T> = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

let _queue: Queue<number> = new Queue();
_queue.push(1);
_queue.push(2);
_queue.push(3);

console.log(_queue.pop(), _queue.pop(), _queue.pop(), _queue.pop());