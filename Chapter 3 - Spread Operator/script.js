"use strict";

//A Quick Revision on Chapter 2
//Conside an Example where you are viewing a hotels' website and you logged in with your username
var appUser="Chhiring Lama";

const hotel = {
  hotelName: "KTM valley View",
  starRating: 5,
  rooms: [1,2,3,4,5,6,7,8,9,10],
  cuisine: ["Italian", "Mexican", "Indian"],
  bookRoom:function({appUser:userName,roomNo=1,selectedDish}){
    console.log(`${userName} booked room no ${this.rooms[roomNo]} with meal plan ${this.cuisine[selectedDish]}`);
  },
  orderDetail:function(detail_1,detail_2,detail_3){
    console.log(`${detail_1},${detail_2},${detail_3}`);
  }
};

let { hotelName, rooms: roomsAvailable = 10, cuisine: dishRange = [] } = hotel;

console.log(hotelName, roomsAvailable, dishRange);

hotel.bookRoom({
  appUser:appUser,
  roomNo:4,
  selectedDish:1,
});

//-----------------

// Spread Operator 
// A unary Operator that spreads all the elements of an iterables and object. 


// Helpful for,
// 1, Joining/merge two or more arrays,
// 2, Copying arrays
// 3, spreading elements of a iterables (array,strings,maps,sets but NOT!! OBJECT !!) and Object

//Array Spread

const oldArr=[1,2,3,4,5,6];
const [a,b,c,d,e,f]=[...oldArr];
console.log(a,b,c,d,e,f);


//This explains, joining and Copying;
const newMenu=["Nepali","Chinese","American"]
const cuisineUpdated=[...hotel.cuisine,...newMenu];
console.log(...cuisineUpdated);


//String Spread
let userName="Chhiring";
console.log(...userName );

//Each element is passed individually into a function
// Rest Parameter
function printArray(...elements){
    console.log(elements);
}
//Spread Parameter
printArray(...newMenu)


//Function to Intake multiple arguments
// const details=[prompt("Please\' Enter Detail 1"),prompt("Enter Detail 2"),prompt("Detail 3")];

//Basic Way to pass the value to the function 
// hotel.orderDetail(details[0],details[1],details[2]);

//With Spread we can simply pass the array with spread operator
// hotel.orderDetail(...details);



//Spreading With Object

//Basic way of Object Copy
let testObject={};
Object.assign(testObject,hotel);
console.log(testObject);
console.log(hotel);

//Both are true copy and not pointing to same object property like 
//testObject=hotel;
//Proof:
testObject.hotelName="Kira Sen";

console.log(testObject);
console.log(hotel);


//Spreading Technique
let hotelBranch ={branchEstDate:"2022",...hotel,branchLocation:"Thapathali"};
hotelBranch.hotelName="KTM Second View";
console.log(hotelBranch);
console.log(hotel);