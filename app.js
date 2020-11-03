// Iterators and Generators are different but are used in similar ways. They are both used to iterate through something. You can call part of a return posit and then call the next part and so on. 
// Iterators like advanced loops that can be paused. 
// Generators are functions that can be paused and can return multiple values. 

function nameIterator(names) {
    let nextIndex = 0;

    return { // Return a object that has a 'next' function. 
        next: function () { 
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } : 
                {done: true}
        }
    }
}

const nameArr = ['Patrick', 'Bob', 'Kishy', 'Devy', 'Timmy'];

const names = nameIterator(nameArr);

console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())