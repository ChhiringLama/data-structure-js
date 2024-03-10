"use strict";


//====================================Sets============================
// A datastructure in JS that holds unique value, similar to array that can also hold functions and methods
// //Making a set
// const orderForFoods=new Set([
//     "Pasta",
//     "Pizza",
//     "Pasta",
//     "Pizza"
// ]);

// console.log(orderForFoods);

//Check size of the set
// console.log(orderForFoods.size);

//Check if it has an elemet 
// console.log(orderForFoods.has("Pizza"));

// //Adding to a set
// orderForFoods.add("Momo");
// orderForFoods.add("Momo");
// orderForFoods.add("Chowmien");
// orderForFoods.add("Chowmien");

//Two Chowemine, represented as 1, deleted the copy 
// orderForFoods.delete("Chowmine")


//Destructing into an array
// const [...orders]=orderForFoods;
// console.log(orders);

//Retriving the values
//We dont, We can however assign it to an array
// To retirve we would rather use an array

//Looping
// for(const element of orderForFoods){
    // console.log(element);
// }

// const staffs=["waiter","chef","waiter","cook"];
// const staffUnique=new Set(staffs);
// const staffUnique=[...new Set(staffs)];
// console.log(staffUnique);


//Directly checking for uniqu elements
// console.log(new Set(["waiter","chef","waiter","cook"]).size);



// Contrary to map method of array that is used to make a new array from an array with a 
// defined function that is called upon each key 
// Map is a datastructure that we can map values to keys like an object
// Object's key are alawys keys, maps however can hold key in different types like (object,string,arrays and other maps)


//First create a new instance
const resturant=new Map();

//set the value with set method
//these methods also returns the update map
resturant.set('Name','Classico Italiano');
resturant.set(1,'Nepal,Kathmandu');
console.log(resturant.set(2,'Nepal,Pokhara'));

//Since it returns the map, the first set will be evaluated to resturant after setting
// thus it will be called set() second method
resturant.set('Categories',['Italian','Nepali','Indian']).set('open',10).set('close',23);

//Retriveal
// With get() method and the key name, 
// the datatype should be kept in mind,
// like numbers should not have inverted comas
console.log(resturant.get('open'));
console.log(resturant.get('Categories'));
console.log(resturant.get(1));


//Evaluation of boolean value inside the get method to access a property
resturant.set(true,"We are Open");
resturant.set(false,"We are Closed");

const currentTime=12;

console.log(resturant.get(currentTime>resturant.get('open') && currentTime<resturant.get('close')));
// resturant.get(currentTime>resturant.get('open') && resturant.get('close'));


//Checking key
console.log(resturant.has('open'));

//Deleting key
resturant.delete('open');

console.log(resturant);

//Clear all data
// resturant.clear()

console.log(resturant.size);



//Using Arrays or objects for map keys
//We cannot diretly define array as the key, rather we difine and array and use the identitfier
// since its a reference type the identifier will point to the same array from the heap
const arrKey=["User Name", "User Detail"];

resturant.set(arrKey,'Chhiring Lama');

console.log(resturant.get(arrKey));

//DOM element or Speical objects
resturant.set(document.querySelector('h1'), 'Heading');
console.log(resturant.get(document.querySelector('h1')));
console.log(resturant);
