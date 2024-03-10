"use script";

//Using .set method to create a map is a bit tiring
//so we can instead pass the Map our array that will contain 
// multiple arrays where first poisition is the key
// and second position  is the value

const question=new Map([
    ["Question", "Select one server side Programming Language"],
    [1, 'HTML'],
    [2, 'QBASIC'],
    [3, 'Javascript'],
    ["Correct",3],
    [true,"Correct"],
    [false,"Try again"]
])

console.log(question);


const obj={
    name:"My Object",
    properties:3,
    myfunction(){
            console.log("Hello");
    }
}

//Converting object to map
console.log(Object.entries(obj));

const newMapfromObj=new Map(Object.entries(obj));
console.log(newMapfromObj);


//Iterating
//Maps do not need .entries to access them as entries as it has already an entries (Array of arrays)
console.log(question.get('Question'));
for(const [key,value] of question){
        if(typeof key==='number'){
        console.log(`Answer ${key} : ${value}` );
        }
}

// const answer=Number(prompt("Your Answer"));
// console.log(answer);

// console.log(question.get(question.get("Correct")===answer));


//Converting map to an array
console.log([...question]);


//=============================
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
