"use script";
const copyArry=[undefined,20,2,4,6,2,3];
const foods=["Momo","Chowmien","Pasta","Spaghetti"]
const obj={
    name:"Object",
    roll:10,
    method:function(){
        console.log(this.name + " Says hello");
    },
    array:[13,63,23,42,55,"Apple","Ball",null]
}

const arr=[1,2,4,5,6,7,8,...obj.array,...copyArry];


// for (let x of arr) {
//    if(x >5 || typeof(x)=="string"){
//     continue;
//    }else{
//     console.log(x);
//    }
//    //Easy way of checking the index
//    console.log("The index of the element " +x+" is "+arr.indexOf(x));
// }


//Entries method returns the key value pair of each index in the array
//for example
//const arr=["Apple","Ball",undefined];
//arr.entries with y as n iterator will pass 
//y at 0=[0, "apple"] which means y[1] = apple and y[0]=0
//y at 1=[1, "Ball"]
//y at 2=[2, undefined]


for(let y of foods.entries()) 
{
    // so y[0] 
    console.log(`${y[0]+1}: ${y[1]}`);
}

console.log([...foods.entries()]);


//Since when we use entries(), the iterator is becomes and array type iterator, 
//thus we can destructure it 

const players=["Messi","Ronaldo","Kaka"];
for(let [index,element] of players.entries()){
    console.log(`Player ${index+1} : ${element}`);
}