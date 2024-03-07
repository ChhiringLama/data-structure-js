"use strict";

//For feature 3
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



//Feature 3, using [] to evalutae key
const openingHours={
    Saturday:{
        open:10,
        close:11
    },
    Sunday:{
        open:10,
        close:11
    },
    [weekDays[2]]:{
        open:9,
        close:11
    }
}


//ES6 Feature of creating object with other way unlike the traditional {} literals
const resturant={
    name:"High valley resturant",
    starRating:5,

    //Feature 1
    //Tradition way
    // openingHours:openingHours,

    //ES6 Object 
    //Its the same as above
    openingHours,


    //Feature 2
    //Traditinal way
    order:function(){
        console.log("Hello");
    },

    //New way
    functionName(){
        console.log("Hello from a shortcut of creating a method inside an object");
    }

}


console.log(resturant.openingHours);