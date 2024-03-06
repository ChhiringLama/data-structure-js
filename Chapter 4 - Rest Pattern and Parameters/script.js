"use strict";
const oldObj={
    objName:"None",
    objProperty:["Is short",3,"2024/03/05"],
    objCopyAble:true,
    objObj:{
        childObj_1:{
        childProperty_1:1,
        childProperty_2:2,
        },
        childObj_2:{
            childProperty_1:3,
            childProperty_2:4,
        }
    },
};  


//When ... Spread Operator is on the right side of a assignment statement , like:
//const arry[] = [...spreadAnIterable];
//This becomes a spreading
const oldArr=[1,2,3,4,5,6];
const [a,b,c,d,e,f]=[...oldArr];
console.log(a,b,c,d,e,f);

//[] =[] / or [] = array is array destructure, so each value from right array is destructred to variable declared inside the
// array destructure bracket

//Sometimes we might need to collect every elements from the destructure but dont need to declare all the variable
//to store them like above as a b c d e f,
//in this case we use rest operator

//When ... operator is on the left side of a statement, like:
// note that spreading can be more than 1 as we want to spread more than 1 arrays
// however rest is only 1 as we take all the rest elements into a single defined array
const [g,h,i,j,k,l,...restOftheElements]=[...oldArr,...oldObj.objProperty,"These","Elements","Will","Not","Have","Individual","Varibales","Declared","For","Them"];
console.log(g,h,i,j,k,l,restOftheElements);

//Similar to how spread passes an iterable, rest operator creates an iterable (mostly an array)


//-------Object rest Operator
// Collecting Obj of an Object
let {childObj_1,...childrens}=oldObj.objObj;
console.log(childObj_1,childrens);


//Functions with spreading
// As rest operator creates and array, numbers becomes and array inside the function
// numbers[0] will mean 2

//!!!NOTE Here receiving the paramter is rest parameter (Unpacking)
let add=function(...numbers){
   let sum=0;
   for(let i=0; i<numbers.length; i++){
    sum+=numbers[i];
   }
   return sum;
}

console.log(add(2,3));

add(4,5,6,7,8,9); //Individual variable

const x=[23,4,6];

//!!NOTE Here passing the parameter is spread (Packing)
add(...x);   //Array


//!! Note how this function is able to take both array and individual variable too


//----------------------------


const hotel = {
    hotelName: "KTM valley View",
    starRating: 5,
    cookFood:function(mainIngredient,...otherIngredients){
        let remainingIngredients="";
        for(let i=0; i<otherIngredients.length; i++){
           remainingIngredients=remainingIngredients.concat(otherIngredients[i]+" - ");
        }
        remainingIngredients=remainingIngredients.slice(0,remainingIngredients.length-2);
        console.log(`Food is being made with ${mainIngredient} and with: ${remainingIngredients} `);
    },
    items:["Dough","Spiece","Salt","Water","Pineapple"],
  };

hotel.cookFood(hotel.items[0],hotel.items[3],hotel.items[4]);
hotel.cookFood("Dough","Ginger","Wine");