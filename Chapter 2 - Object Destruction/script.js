"use strict";

const resturant = {
  name: "Nepali BBQ",
  location: "Boudha -6, Kathmandu, Nepal",
  categories: ["Chinese", "Nepali", "Indian"],
  starterMenu: ["Momo", "Laphing", "Kebab"],
  mainMenu: ["Daal Bhaat Tarkari", "Ting Dumplings", "Naan Roti and Mutton"],

  // Method
  order: function (starterIndex, MainIndex) {
    // The outside [] is the destructor bracket
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },

  //Child Object
  openingHours: {
    //Grandchild Objects
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 20,
    },
    sat: {
      open: 0,
      close: 22,
    },
  },

  //How we pass object - See Code line : 114
  passinganObject:function(obj)
  {
    console.log(obj);
  },
 
  //The Parameters are expected and destructed, and if not found can be set to default value
  //Dont forget the {} 
  destructRightAway:function({ordered_by:customername="Client",time:deliveryTime="20:00",address:deliveryAddres="Inside Valley",starterIndex:starters=0,mainIndex:main=0}){
        console.log(`Order made by ${customername} for ${this.starterMenu[starters]} and ${this.mainMenu[main]} to be delivered in ${deliveryAddres} at ${deliveryTime}`);
  }
};

//{} is used to destructure the object,
// We dont need to manually skip the keys, as orders do not matter
//However the variable declared should match the keys in the object
// Syntax
// variabletype {correspondingkey_1,correspondingkey_2,correspondingkey_n}=objectFromWhichKeyWillBeRetrieved

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

//Renaming or Reassigning
//Contrast to renaming or reassigning the destructured variable in array like
// const [newvar_1,newvar_2]=[oldvar_1,oldvar_2];
// we cannot do the below
// this is because {name, openingHours,categories} on the right side is a object itself
// like we have anynomous object inside array as
// const arr=[{value:2},{value:2}];
// -- So name,openingHours,categories are keys (which are undefined) of new object.
// -- thus it returns undefined
const { newName, newOpeningHours, newCategories } = {
  name,
  openingHours,
  categories,
};
console.log(newName, newOpeningHours, newCategories);

//Proper way of reassigning or Renaming

// Dont get confused that name:resturantName doesnt ressemble the key value pair
// in object destructing this syntax renams the varaiable;

const {
  name: resturantName,
  openingHours: resturantOpeningHour,
  categories: resturantCategories,
} = resturant;

console.log(resturantName, resturantOpeningHour, resturantCategories);

// Setting Default Values if a key/property is not found
// resturant.menu //undefined
//if startermenu not found set an empty array and also rename to starters
const { menu = [], starRating = 3, starterMenu: starters = [] } = resturant;
console.log(menu, starRating, starters);

//Mutating Variables
//Or Overriding the a and b
let a = 22;
let b = 33;

const newObj = { a: 100, b: 200 };
// {a,b}=newObj
// wont work becuase when js interpreter reads the beginning of {} '{' it expets a code block, so {a,b} is read as
// a code block and we never assign a code block with = operator behind it;

//meaning the code block is always on the right side with = on the left

// so interpreter fails to read {a,b} as a object destruture;

//using () makes it valid as object destructor
({ a, b } = newObj);

console.log(a, b);

//Destructuring Nested Object

const { fri } = openingHours;
console.log(fri);

const {sat: { open: opensAt = 9, close: closesat = 12 }} = openingHours;

console.log(opensAt, closesat);

//Section 2 - Function for unknown amount of parameters passed
//Basic way of passing an object to a function 
resturant.passinganObject({
    time:23,
    address:"USA, NewYork Brooklyn Street",
})

//Now while sending the object, we can destruct its variable right away, Again note that when destructing object,
//the order doesnt matter, but key's exact name does

resturant.destructRightAway({
    ordered_by:"Chhiring",
})

resturant.destructRightAway({
    ordered_by:"John Cena",
    time:"22:00",
    address:"Bhaktapur",
    starterIndex:2,
    mainIndex:1,

})