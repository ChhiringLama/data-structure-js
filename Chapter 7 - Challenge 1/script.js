/* 
We're building a football betting app!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1
const [player_1, player_2] = game.players;

//Task 2
let [teamA_Gk, ...teamA_fieldplayers] = game.players[0];

//Task 3
//Rest (spread rest element and creates a new array)
let [...allPlayers] = game.players[0];
//Spread
allPlayers.push(...game.players[1]);

//Or we can do
// const allPlayers=[...player_1,...player_2];

//Test
//console.log(teamA_Gk);
//console.log(teamA_fieldplayers);
//console.log(allPlayers);

//Task 4
let playersFinal = [...game.players[0]];
playersFinal.push("Thiago", "Coutinho", "Perisic");

console.log(playersFinal);

// Task 5
//let {team1,x:draw,team2}=game.odds;
//   further destucturing

let {odds:{team1,x:draw,team2}}=game;

console.log(draw);

//Task 6
//Rest
function printGoals(...players) {
  let counter = 0;
  for (let i = 0; i < players.length; i++)
   {
    counter=0;
    for (let j = 0; j <= players.length; j++) {
      if (players[i] == players[j]) {
        counter++;
        }
      }
      console.log(`${players[i]} scored ${counter} times`);
    }  
}


// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1<team2 && console.log("Team 2 is likely to win");
// team1<team2 || console.log("Team 2 is likey to win");