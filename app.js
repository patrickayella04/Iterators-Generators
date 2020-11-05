// Iterators and Generators are different but are used in similar ways. They are both used to iterate through something. You can call part of a return posit and then call the next part and so on. 
// Iterators like advanced loops that can be paused. 
// Generators are functions that can be paused and can return multiple values. 

// function nameIterator(names) {
//     let nextIndex = 0;

//     return { // Return a object that has a 'next' function. 
//         next: function () { 
//             return nextIndex < names.length ?
//                 { value: names[nextIndex++], done: false } : 
//                 {done: true}
//         }
//     }
// }

// const nameArr = ['Patrick', 'Bob', 'Kishy', 'Devy', 'Timmy'];

// const names = nameIterator(nameArr);

// console.log(names.next().value)
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next().value)
// console.log(names.next())

// Generator Example - Function generates names using next() method also. 
//Function needs an astrix next to it for js to know its a generator. 

// function* sayName() {
//     yield 'Davey';
//     yield 'Hass';
//     yield 'Doc';
//     yield 'Tommy';
// }

// const name = sayName();

// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next().value);
// console.log(name.next().value);


// ID Creator
function* createIds() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);




