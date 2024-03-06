"use script";

// // Logical operators can:
// use any datatype
// return any datatype
// and perfoms short-circuit evaluation 

//Short - Circuiting: If on a comparison the first operand is true, the result is truthy value, 
// Menaing the second or rest of the operands are not even looked if the first value is true,
// if the opration is truthy then the last truthy operand is returned

console.log(3||'Jonas');
console.log(""|| 'Jonas');
console.log(true|| '0');
console.log(undefined|| null);

//As soon as the firest true is found, the truthy value is returned, This is called short-circuit evaluation
console.log(undefined||"Bruh"|| true );


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

//Try commenting and uncommenting this
hotel.numGuests=20;
// hotel.numGuests=0

const guests=hotel.numGuests?hotel.numGuests:10;
console.log(guests);
const guests_2=hotel.numGuests || 40;
console.log(guests_2);


// And Operator short circuiting

//Exactly opposite to the or Operator, since "&&" requires all the operands to be truthy to return true; as soon as
//it finds the first falsy value, the operation will result in false and return the falsy value

//If all are true, the last oporand is evaluated
console.log(0 && 'Jonas');
//0
console.log("Jonas" && true && 1 && null && "apple");


if(hotel.orderPizza){
    hotel.orderPizza();
}else{
    console.log("Cannot Order");
}


//Check first ? if true (exist or not), go to second oprand and execute
hotel.orderPizza && hotel.orderPizza()



//The nullish coalescing operator
// Null value = null and undefined 
// nullish coalescing will strictly consider null and undeinfed only a null value
// not 0 and empty ''

// const taxMoney=0;
taxMoney=null;


const taxPaid=taxMoney ?? 10;
console.log(taxPaid);