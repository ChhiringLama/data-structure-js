"use strict";

//Destruciton
//Simple Destruction of Array
console.log("==================Array Destruction============");
const chhiring = ["Chhiring", "Nepali", { age: 23, height: 6 }];
const messi = ["Messi", "Argentian", { age: 40, height: 5 }];
const aguro = ["Aguro", "Sergio", { score: 2, team: "Arsenal" }];

//Into Individual Variable
// The left side are the variables the value are passed into
let [firstname, language, { age: umer = 10, height: aglo = 6 }] = chhiring;
console.log(firstname, language, umer, aglo);

//With the help of spread
// Meaning each element is indivually spread first
let [lastname, school, { age = 10, height = 6 }] = [...messi];

console.log(lastname, school, age, height);

//Into New Array using rest
//Meaning all the elements are copied as it is into a new array
let [...studentInfo] = chhiring;
console.log(studentInfo);

//Rest and spread
let [...aguroInfo] = [...aguro];
console.log(aguroInfo);

console.log("==================Object Destruction============");

const resturant = {
  restroname: "Local KTM Cafe",
  rating: 5,
  menuItem: ["Chicken Momo", "Buff Momo", "Chowmein", "Coconut Lassi"],
  order({username="User",itemNo=1}) {
    console.log(`${username} has orderderd ${this.menuItem[itemNo]}`);
  },
  hours: {
    sunday: {
      open: 10,
      close: 0,
    },
    monday: {
      open: 10,
      close: 0,
    },
  },
};

//Destruction of Obj "{}""
//Individual element
// const {restroname,rating,menuItem}=resturant;
// console.log(restroname,rating,menuItem);
// putting them into an array at last;
// const newElement=[restroname,rating,menuItem]

//Individual element to array at first
// const [{restroname,rating,menuItem}]=[resturant];
// console.log(restroname,rating,menuItem);

//Nest object 
const {hours:{sunday,monday}}=resturant;
// console.log(sunday,monday);
//Get it to an array
const objArray=[sunday,monday];
console.log(objArray);

//Object to another Object
const newObj={...resturant};
console.log(newObj);

//passing object to a function and destructing them
resturant.order({
  username:"Chhiring",
  itemNo:1,
})


//Optional Chainning 
//Proceed to later part of an evaluation only if the parent exist, which is checked by "?."
console.log(resturant.hours?.monday);



//Looping Objects 

console.log("==============---------------Keys---------================");
for(const x of Object.keys(resturant)){
  console.log(x);
}

console.log("==============---------------Values----------================");
for(const x of Object.values(resturant)){
  console.log(x);
}


console.log("==============---------------Entry----------================");

for(const [keys ,values] of Object.entries(resturant)){
  console.log(keys , values);
}
