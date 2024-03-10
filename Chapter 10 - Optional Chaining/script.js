"use strict";

// Optional chaining is a feature introduced in JavaScript (ECMAScript 2020) that 
// allows you to simplify accessing properties or calling methods of an object when there's a 
// possibility that the object or its properties may be null or undefined. 
// It helps prevent errors and makes your code more resilient.
// Sytanx 
// parent?.child
// where parent is what the object or its property we check if it exist and 
// child is the child of the parent we call


const days =["sunday","monday","tuesday","wednesday"];

const openinghours={
    [days[0]]:{
        open:10,
        close:11,
    },
    [days[1]]:{
        open:10,
        close:11,
    },
    [days[2]]:{
        open:10,
        close:11,
    },
    [days[3]]:{
        open:10,
        close:11,
    }
}

// console.log(openinghours);

const hotel={
    name:"Hotel Axe",
    starRating:5,
    openinghours,
}

//If object doest exict create it 
// Null ||= assing this if true
hotel.openinghours.thursday||={open:10,close:11};
console.log(hotel.openinghours.thursday.open);


if(hotel.openinghours && hotel.openinghours.sunday.open){
    console.log(hotel.openinghours.sunday.open);
}else{
    console.log("Hotel is not open on friday");
}

//Doing this in optional chaining
// If the object exist return the property behind it , else return undefined and not an error
console.log(hotel.openinghours.saturday?.open);


//If openinghours exist, go to sunday if sunday exist go to open and return it
console.log(hotel.openinghours?.sunday?.open);



//Example
const weekDays =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const opensOrnot={
    [weekDays[0]]:{
        open:10,
        close:11,
    },
    [weekDays[1]]:{
        open:7,
        close:11,
    },
    [weekDays[2]]:{
        open:7,
        close:11,
    },
    [weekDays[3]]:{
        open:8,
        close:11,
    },
    [weekDays[4]]:{
        open:9,
        close:11,
    },
    [weekDays[5]]:{
        open:0,
        close:11,
    }
}

for(const x of weekDays){
    const status=opensOrnot[x]?.open??"Closed";
    console.log(`On ${x} we open at ${status} `);
}

// Using optional Chaining to check if properyt exist or not on: 
// Obj
const resturant={
    name:"Hotel Axe",
    starRating:5,
    openinghours,
    owner:{
        name:"Chhiring",
    },
    branches:["Thapthali","KTM"],
    contact(userName){
        console.log("helo" + userName);
    }
}

//Child object
console.log(resturant.owner?.name ?? "Methods doesnt exist");

//Child Arrays
console.log(resturant.branches?.[0] ?? "Methods doesnt exist");

//Methods
console.log(resturant.contact?.("Rahul") ?? "Methods doesnt exist");


// Using optional Chaining to check if properyt exist or not on: 
//Arrays 

//! Note that we check if the parent exist or not then call the children

const users=[{userName:"Messi"},{userName:"Pogba"}];
console.log(users[0]?.userName ?? "Username is not defined");