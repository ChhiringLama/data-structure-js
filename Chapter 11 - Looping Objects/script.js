"use strict";

const array=["Sunday","Monday","Tuesday"];
const obj={
    thu:{
        open:10,
        close:12,
    },
    fri:{
        open:9,
        close:12,
    },
    sat:{
        open:8,
        close:12,
    }
}

//Normal For Of
for(const elements of array){
    console.log(elements);
}

//For accessing keys of objects
for(const elements of Object.keys(obj)){
    console.log(elements);
}

//Object.keys, values, entries makes an array of all the requested part of the object
//In above Object.keys(obj) becomes an array 
//which will make the statement look something like 
// for(const elements of TheReturnedArray){
    //Statment
// }

//To access property name or the key
// console.log(Object.keys(obj));

//Object.keys() creates an array that stores all the keys of an object


//To access the property value
for(const element of Object.values(obj)){
    console.log(element);
}

console.log("----Looping Entire Object-----"); 

//To loop the entire key and values together
// Destructured array which is again destructured to object
for(const [key, {open, close}] of Object.entries(obj)){
    // console.log(element);
    console.log(`On ${key} we are open at ${open}`);
}

console.log(Object.entries(obj));