"use strict";

//Destructuring: Unpacking all the variables of an object or an Array into a seperate variable or other datastructure
// Useful for retreving and storing variable
// Not Destruction! 
// [] => Array Destructuring
// {} => Object Destructuring
//Simple destructuring of Array
const arr=[1,2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
const d=arr[3];

// Destructuring of array, Note that v x y z might look like they are in an array, but
// actually they are all variables.
// [] Denotes the destructor bracket that is destructing the array and storing into the variable inside of it 
// from the corresponding variable
// [] or {} desturcturing are usually on the left side of an expression.
const [v,x,y,z]=arr;
console.log(a,b,c,d);
console.log(v,x,y,z);
console.log(arr);

const resturant ={
    name:"Nepali BBQ",
    location:"Boudha -6, Kathmandu, Nepal",
    categories:['Chinese','Nepali','Indian'],
    starterMenu:['Momo','Laphing','Kebab'],
    mainMenu:['Daal Bhaat Tarkari','Ting Dumplings','Naan Roti and Mutton'],
    order:function(starterIndex, MainIndex){
        // The outside [] is the destructor bracket
        return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
    }
}


//Desturcting array of an object;

let [firstItem,,lastItem]=resturant.starterMenu;
let [firstCourse,secondCourse]=resturant.mainMenu;

console.log(firstItem, lastItem, firstCourse, secondCourse);

//Changing/Reassingning the variable of the desturctued array
[lastItem,firstItem]=[firstItem,lastItem]
console.log(firstItem,lastItem);

let [starterFood,mainFood]=resturant.order(2,0)
console.log(starterFood,mainFood);



//Destructing a Nested array
const arr2=[1,2,[3,4]];
let [var_1,,[var_2,var_3]]=arr2;
console.log(var_1,var_2,var_3);


//Default Values
// variable = value
let[p="Not Set",q="Not Set",r="Not Set",s="Please Set Bruh",t=1]=[8,9]
console.log(p,q,r,s,t);