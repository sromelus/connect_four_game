class Game {
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers(){
    const players = [];
    const player1 = new Player('Player 1 ', 1, '#e15258', true);
    const player2 = new Player('Player 2 ', 2, '#e59a13');
    players.push(player1,player2);

    return players;
  }

  startGame(){
    
  }
}
