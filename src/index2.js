import { compose , pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce } from 'immer';

// function sayHello() {
//     return function(){
//         return "hello world";
//     }
// }

// let fn = sayHello();
// let message = fn();
//////////////////////////////
// let numbers = [1,2,3];

// numbers.map(number => number * 2);

// setTimeout(() => console.log("hello"),1000);
/////////////////////////////////////

// let input = " javasscript ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;

// const result = wrapInDiv(toLowerCase(trim(input)));
//trim
//wrapInDiv

/////////////////////////////////////

// let input = " javasscript ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;

// const transform = compose(wrapInDiv, toLowerCase , trim);
// transform(input);
// //or
// const transform = pipe ( trim , toLowerCase , wrapInDiv);

////////////////////////////////////////

// let input = "   JavaScript   ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

// const transform = pipe(trim, toLowerCase,wrap("div"));
// console.log(transform(input));

//////////////////////////////////////

// const person = { name: "John", address: { country:"USA" , city: "San Francisco"}};
// // const updated = Object.assign({},person,{ name: "Bob" , age:30});
// const updated = { ...person ,address: {...person.address, city:"New York"} , name:"Bob"};
// console.log(person);

/////////////////////////////////////

// const numbers = [1,2,3];

// //Adding

// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];


// //Removing

// const removed = numbers.filter(n => n !== 2);

// //Updating

// const updated = numbers.map(n => n === 2 ? 20 : n);


////////////////////////////////////

let book = { title: "Harry Potter"};


function publish(book) {
   return produce(book, draftBook => {
        draftBook.isPublished = true;
   });
}

let updated = publish(book);

console.log(book);
console.log(updated);