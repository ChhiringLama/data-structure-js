"use script";

const striker={
    form:"Fit",
    players:["Chhiring", "Messi","Ronaldo"],
    train:function(){
        console.log("All players have been trained");
    },
    playerMissing:true,
    certifiedPlayers:1,
    // certifiedPlayers:0,
}


const keeper={
    form:"Fit",
    players:["Don", "kaka","xavi"],
    train:function(){
        console.log("All players have been trained");
    },
    playerMissing:false,
}


const defenders={
    certifiedPlayers:0,
}

//Suppose we got keeper and striker object from an API, and now all objects need to have similar property
//Consider adding cerified property to keeper object.

// OR
//Using a terinary operator (Traditional Approach)
// keeper.certified ? keeper.certified : keeper.certified=true,

striker.certifiedPlayers=striker.certifiedPlayers || 3;
// keeper.certifiedPlayers=keeper.certifiedPlayers || 3;
console.log(striker.certifiedPlayers);
// console.log(keeper.certifiedPlayers);


//Logical operator on the other hand is short from of performing logical operation and assigning them
keeper.certifiedPlayers||=3;
console.log(keeper.certifiedPlayers);

//Nullish coaslecing (Similar to or but nullish value are the only falsy value)
//if defenders.certifiedPlayers have any value except nullish consider it true and assign in to itself,
//other wise go to next operand that is 3, since it is true assign it to the def.certifiedPlayers
defenders.certifiedPlayers??=3;
console.log(defenders);


//And operator

//Conside a scenario where if an object has form property we make it "Anyonomou".
striker.form = striker.form && "Hidden";
// Whats happening ?
//sticker.form property is taken
// And operator works in such way that as soon as it finds the falssy value it returns the falsy value
// else if every operand evaluates to true, the last operand is evaluated or returned
// so stricker.form is true in right side since it exist, now "Hidden" a truthy value is returned 
// striker.form is assigneed "Hidden"

//And logical Assignment
keeper.form&&="Hidden";

defenders.form&&="Hidden";

console.log(striker.form);
console.log(keeper.form);

console.log(defenders.form);
//Undefined, since it is the first oprand compared and returned false, as it is AND operator it is returned


//!!!!!!!!!!!!!!Note that this is all possible becuase of short circuiting, ( Returning the first truthy value else in truthy operation 
// returning the last truthy value)