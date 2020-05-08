class Token {
  constructor(index, owner){
    this.owner = owner;
    this.id =  `token-${index}-${owner.id}`
    this.dropped = false;
  }

  drawHTMLToken(){
    const token = document.createElement('DIV');
    token.setAttribute('id', `${this.id}`)
    token.setAttribute('class', 'token')
    token.setAttribute('style', `background-color: ${this.owner.color}`)
    document.getElementById('game-board-underlay').this.owner.color;
  }

  get htmlToken(){
    return drawHTMLToken()
  }
}


// Stage1Step5 - Creating Class Files
