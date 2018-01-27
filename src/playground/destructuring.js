// 
// Object Destructuring 
// 

// const person ={
//     name :"Bob",
//     age: 28,
//     location:{ 
//       city: "Yerevan",
//       temp: 27
//      }
//     };
// //   const name = person.name;
// //   const age = person.age;
 
// const {name : firstName ="Anonymous", age} = person;
//  console.log(`${firstName} is ${age}.`);

//  const { city, temp:temperature } = person.location;
//  if (city && temperature){
//     console.log(`It is ${temperature} in ${city}. ` );
//  }
 

// const book = {
//     title:"Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher:{
//     name: "Penguin"
//     }
// };

// const{title,author} = book;
// console.log(`I am reading ${title} by ${author}.`);

// const {name: publisherName ="self-published"} = book.publisher;
//  console.log (publisherName)

//  
// Array Destructuring
// 

// const address= ['777 s Juniper street', "Philadelphia", "Pennsylvania","73737"];
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}`);

const item = ["Coffee(hot)", "$2.00", "$2.50", "2.75" ];
const [itemName, , mediumPrice] = item;
console.log (`A medium ${itemName} costs ${mediumPrice} `)
































