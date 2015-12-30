function HowToPlayScreen() {

  this.itemsList = [];
  // this.itemsList.push(new Hero(players[0], 0, 1))
  this.itemsList.push(new FireShield())
  this.itemsList.push(new ProximityBomb())
  this.itemsList.push(new GravityShield(20, 1))
  this.itemsList.push(new SizeChanger(2))
  this.itemsList.push(new SizeChanger(.3))
  this.itemsList.push(new FireSprite())
  this.itemsList.push(new Drone())
  this.itemsList.push(new FreezeBomb())
  this.itemsList.push(new ExtraLife())


  this.construct = function() {
    frameRate(60)
    canvas = createCanvas(windowWidth, windowHeight - 5);
    canvas.parent('canvasContainer');
    gameLEdge = width / 2 - gameBoardSize / 2
    gameREdge = width / 2 + gameBoardSize / 2
    gameTEdge = height / 2 - gameBoardSize / 2
    gameBEdge = height / 2 + gameBoardSize / 2
      // Putting this here because it depends on canvas being already created
    this.startButtonVector = createVector(width / 2, 100)
  }

  this.animate = function() {

    background(0, 0, 0, 50);
    textFont("Georgia")
    textStyle(BOLD)
    strokeWeight(0)
    fill(gameR, gameG, gameB)
    textAlign(CENTER);
    textSize(40);
    text("How to Play", width / 2, height / 2 - 205)
    textSize(14);
    fill(180, 180, 180);
    textFont("Georgia")
    text("Knock your opponent out of the ring, or destroy them \nwith an item, and they'll lose a life.  If your opponent \nloses all of their lives, you win!", width / 2, height / 2 - 160)
    imageMode(CENTER)
    textSize(24);
    fill(gameR2, gameG2, gameB2)
    text("Items", width / 2, height / 2 - 70)


    for (i in this.itemsList) {
      item = this.itemsList[i]

      if (item instanceof CircleObstacle) {
        item.size = 40;
        item.transp = 100;
      }
      itemYPos = ((height / 2) - 60) + (i * 30) + item.size
      item.location.x = width / 2 - 145
      item.location.y = itemYPos
      item.inertTimer = 100000000
      fill(item.r, item.g, item.b);
      item.display();
      noStroke();
      itemDescription = item.description
      textSize(12);
      textAlign(LEFT, CENTER)
      fill(180, 180, 180);
      text(itemDescription, (width / 2) - 130 + item.size / 2, itemYPos)
    }

    game.drawGameBoard();

  }
}