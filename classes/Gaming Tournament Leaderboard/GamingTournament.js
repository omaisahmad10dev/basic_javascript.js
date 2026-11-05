class Tournament {
  constructor(name) {
    this.tournamentName=name;
    this.players=[];
  }

  addPlayer(name , startingScore){
    let newPlayers={
      playerName:name,
      score:startingScore,
    }

    this.players.push(newPlayers)
    console.log('player tournament mein dakhil ho gaya hai.')
  }
  updateScore(name, poinToAdd){
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].playerName===name) {
        this.players[i].score+=poinToAdd;
        
      }
      
    }
  }
}
let myTournament = new Tournament("Pakistan Gaming Cup");

myTournament.addPlayer("Ali", 100);
myTournament.addPlayer("Omais", 150);

myTournament.updateScore("Omais", 50); 


console.log(myTournament.players);
