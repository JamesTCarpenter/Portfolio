/*

FINAL GAME - CYCLOPS FRENZY


*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isFound;

var trees_x;
var coins;
var clouds;
var mountains;
var canyons;

var game_score;
var flagpole;
var lives;


var jumpSound;
var coinSound;
var fallingSound;
var gameOverSound;
var winSound;

var platforms;
var enemies;

function preload()
{
    soundFormats('mp3','wav');
    
    //load your sounds here
    jumpSound = loadSound('assets/jump.wav');
    coinSound = loadSound('assets/coining.wav');
    fallingSound = loadSound('assets/fallingsound.wav');
    gameOverSound = loadSound('assets/losing.wav');
    winSound = loadSound('assets/winning.wav');
    
    jumpSound.setVolume(0.2);
    coinSound.setVolume(0.3);
    fallingSound.setVolume(0.5);
    gameOverSound.setVolume(0.5);
    winSound.setVolume(2);
    
}


function setup()
{
	createCanvas(1024, 576);
    floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    treePos_y = height/2;
    lives = 3;
    
    startGame();

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    isFound = false;
    
	// Initialise arrays of scenery objects.
    
    trees_x = [180, 400, 800, 1000, 1500, 1900, -70, -500, -750];
    
    coins = [{x_pos: 100, y_pos: 120, size: 50, isFound: false},
             {x_pos: 400, y_pos: 120, size: 50, isFound: false},
             {x_pos: 900, y_pos: 120, size: 50, isFound: false},
             {x_pos: 1300, y_pos: 120, size: 50, isFound: false},
             {x_pos: 1900, y_pos: 120, size: 50, isFound: false},
             {x_pos: -200, y_pos: 120, size: 50, isFound: false}, 
             {x_pos: -600, y_pos: 120, size: 50, isFound: false}];
    
    mountains = [{x_pos: 300},
                 {x_pos: 740},
                 {x_pos: -80},
                 {x_pos: 1200},
                 {x_pos: 1900},
                 {x_pos: -800}];
    
    canyons = [{x_pos: -400, width: 20},
               {x_pos: 300, width: 100},
               {x_pos: 1000, width: 5},
               {x_pos: -1200, width: 75}];
    
    clouds = [{x_pos: 50, y_pos: 50},
              {x_pos: 650, y_pos: 180},
              {x_pos: 900, y_pos: 50},
              {x_pos: 1400, y_pos: 80},
              {x_pos: 1800, y_pos: 60},
              {x_pos: -400, y_pos: 50},
              {x_pos: -800, y_pos: 140}];
    
    platforms = [];
    
    platforms.push(createPlatforms(400,floorPos_y - 100,150));
    platforms.push(createPlatforms(900,floorPos_y - 80,130));
    platforms.push(createPlatforms(-500,floorPos_y - 40,150));
    platforms.push(createPlatforms(1600,floorPos_y - 110,100));
    
    game_score = 0;
    
    flagpole = {isReached: false, x_pos: 2200};
    
    enemies = [];
    enemies.push(new Enemy(0, floorPos_y - 10, 100));
    
    enemies.push(new Enemy(1400, floorPos_y - 10, 100));
    
    enemies.push(new Enemy(-800, floorPos_y - 10, 100));

}


function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos,0);
    
	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();
	// Draw trees.
    
    drawTrees();
    
    // Draw platform
    
    for(var i=0; i<platforms.length; i++){
        platforms[i].draw();
    }

	// Draw canyons.
    for(var i=0; i< canyons.length; i++){
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
        
    }
        
	// Draw collectable items.
    
     for(var i=0; i < coins.length; i++){
        if(coins[i].isFound == false){
            drawCollectable(coins[i]);
            checkCollectable(coins[i]);
        }
         
    }
    
    //Draw Flagpole
    
    renderFlagpole();
    
    for(var i=0; i<enemies.length; i++){
        
        enemies[i].draw();
        
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
        
        if(isContact){
            
            if(lives > 0){
                lives -= 1;
                startGame();
                fallingSound.play();
                break;
            }
            
        }
    }
    
    pop();

	// Draw game character.
	
	drawGameChar();
    
    // draw game score
    
    fill(255);
    noStroke();
    textSize(33);
    textFont('Helvetica');
    text("Coins: " + game_score,20,40);
    
    //draw lives
    
    fill(255, 50, 50);
   
    for(var i=0; i < lives; i++){
        

        //Hearts
        
        quad(30 + i * 70, 60, 5 + i * 70, 85, 30 + i * 70, 120, 55 + i * 70, 85); 
	   arc(18 + i * 70, 72, 35, 35, PI - QUARTER_PI, 0); 
	   arc(43 + i * 70, 73, 35, 35, PI - QUARTER_PI, QUARTER_PI);  
        
        
    }
    
    //GAME OVER screen
    
      if (lives < 1) {
        push();
        background(0,0,0);
        fill(245,245,245);
        textAlign(CENTER);
        textSize(75);
        textStyle('bold');
        text("GAME OVER:", width / 2, height / 2 - 65);
        textSize(40);
        text("Press SPACE to try again...", width / 2, height / 2 + 25);
        pop();
          
        return;
      }
    
    //LEVEL CLEARED screen
    
      if (flagpole.isReached) {
        push();
        background(0,0,0);
        fill(245,245,245);
        textAlign(CENTER);
        textSize(75);
        textStyle('bold')
        text("LEVEL CLEARED", width / 2, height / 2 - 65);
        textSize(40);
        text("You Collected:  " + game_score +" Coins", width / 2, height / 2 + 25);
        textSize(40);
        text("Press SPACE to continue your quest...", width / 2, height / 2 + 120);
        pop();

        return;
  }
       

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y){
        var isContact = false;
        for(var i=0; i< platforms.length; i++){
            if(platforms[i].checkContact(gameChar_world_x,gameChar_y) == true){
                isContact = true;
                break;
            }
        }
        if(isContact == false){
            gameChar_y += 1.5;
        }
        
    
    
    }
    
    // Call the flagpole check function
    
    if(flagpole.isReached == false){
        checkFlagpole();
    }
    
    // Character has lost all lives.
    checkPlayerDie(); 

	// Update real position of character
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	if(keyCode == 37){
        console.log("left arrow");
        isLeft = true;
    }
        
    if(keyCode == 39){
        console.log("right arrow");
        isRight = true;
    }
    
    if (keyCode == 32 && gameChar_y >= floorPos_y){
        console.log("spacebar");
        gameChar_y -= 120;
        isFalling == true;
        jumpSound.play();
        
    }
    
    if (keyCode == 32 && lives < 1) {
	flagpole.isReached = false;
	lives = 3;
    
    game_score = 0;
	startGame();
	}

	if (keyCode == 32 && flagpole.isReached) {
	flagpole.isReached = false;
	lives = 3;
    game_score = 0;
	startGame();
	}
   
    

}

function keyReleased()
{

	if(keyCode == 37){
        console.log("left arrow");
        isLeft = false;
    }
        
    if(keyCode == 39){
        console.log("right arrow");
        isRight = false;
    }
    
    if (keyCode == 32){
        isFalling == true;
    }
    

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x - 5,gameChar_y - 57, 11,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x - 7,gameChar_y - 57, 4,8);
        fill(0);
        ellipse(gameChar_x-8,gameChar_y - 57, 3,4);
        ellipse(gameChar_x -3,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x -2,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x -20,gameChar_y - 38, 18,6);
        //legs
        rect(gameChar_x - 7.5,gameChar_y - 16, 8,13);
        rect(gameChar_x + 2,gameChar_y - 16, 8,13);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x +5,gameChar_y - 57, 11,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x +7,gameChar_y - 57, 4,8);
        fill(0);
        ellipse(gameChar_x +8,gameChar_y - 57, 3,4);
        ellipse(gameChar_x +3,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x +2,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x,gameChar_y - 38, 18,6);
        //legs

        rect(gameChar_x - 10,gameChar_y - 16, 8,13);
        rect(gameChar_x,gameChar_y - 16, 8,13);

	}
	else if(isLeft)
	{
		// add your walking left code
        
        //head
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x - 5,gameChar_y - 57, 11,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x - 7,gameChar_y - 57, 4,8);
        fill(0);
        ellipse(gameChar_x-8,gameChar_y - 57, 3,4);
        ellipse(gameChar_x -3,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x -2,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x - 5,gameChar_y - 38, 6,18);
        //legs
        rect(gameChar_x - 10,gameChar_y - 16, 8,13);
        rect(gameChar_x + 2,gameChar_y - 16, 8,13);


	}
	else if(isRight)
	{
		// add your walking right code
        
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x + 5,gameChar_y - 57, 11,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x +7,gameChar_y - 57, 4,8);
        fill(0);
        ellipse(gameChar_x +8,gameChar_y - 57, 3,4);
        ellipse(gameChar_x +3,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x +2,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x - 5,gameChar_y - 38, 6,18);
        //legs
        rect(gameChar_x - 10,gameChar_y - 16, 8,13);
        rect(gameChar_x + 2,gameChar_y - 16, 8,13);




	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x,gameChar_y - 57, 18,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x,gameChar_y - 57, 8,8);
        fill(0);
        ellipse(gameChar_x,gameChar_y - 57, 4,4);
        ellipse(gameChar_x,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x - 15,gameChar_y - 40, 6,10);
        rect(gameChar_x + 10,gameChar_y - 40, 6,18);
        //legs
        rect(gameChar_x - 10,gameChar_y - 16, 8,13);
        rect(gameChar_x + 2,gameChar_y - 22, 8,8);
        }
    
	else
	{
		// add your standing front facing code
        
        //head
        fill(255,140,0);
        ellipse(gameChar_x,gameChar_y - 54,25,30 );
        fill(255);
        stroke(100);
        ellipse(gameChar_x,gameChar_y - 57, 18,10);
        noStroke();
        fill(139,69,19)
        ellipse(gameChar_x,gameChar_y - 57, 8,8);
        fill(0);
        ellipse(gameChar_x,gameChar_y - 57, 4,4);
        ellipse(gameChar_x,gameChar_y - 46, 10,6);
        fill(255,100,0);
        ellipse(gameChar_x,gameChar_y - 44, 6,4);
        //body
        fill(165,42,42);
        rect(gameChar_x - 10,gameChar_y - 40, 20,25);
        //arms
        fill(255,140,0);
        rect(gameChar_x - 15,gameChar_y - 40, 6,18);
        rect(gameChar_x + 10,gameChar_y - 40, 6,18);
        //legs
        rect(gameChar_x - 10,gameChar_y - 16, 8,13);
        rect(gameChar_x + 2,gameChar_y - 16, 8,13);


	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds(){
    for(var i = 0; i < clouds.length; i++)
    {
        fill(180,180,180);
        //ellipse(205,170,90,70);
        ellipse(clouds[i].x_pos +70,clouds[i].y_pos +30,90,70);
        //ellipse(170,175,70,50);
        ellipse(clouds[i].x_pos +35,clouds[i].y_pos +35,70,50);
        //ellipse(250,175,60,50);
        ellipse(clouds[i].x_pos +115,clouds[i].y_pos +35,60,50);
    }
}

// Function to draw mountains objects.
function drawMountains(){
    for(var i = 0; i < mountains.length; i++)
    {
    
        fill(147,112,219);
        //triangle(570,300,500,432,650,432);
        triangle(mountains[i].x_pos +200,300,mountains[i].x_pos +130,432,mountains[i].x_pos +280,432);
        //triangle(610,250,550,432,700,432);
        triangle(mountains[i].x_pos +240,250,mountains[i].x_pos +180,432,mountains[i].x_pos +330,432);
        //triangle(650,300,590,432,750,432);
        triangle(mountains[i].x_pos +280,300,mountains[i].x_pos +220,432,mountains[i].x_pos +380,432);
    
    }

}
// Function to draw trees objects.
function drawTrees(){
    for(var i = 0; i < trees_x.length; i++)
    {
   
        fill(139,69,19);
        rect(trees_x[i] +22,treePos_y +13,40,132);
        fill(85,107,47);
        triangle(trees_x[i] -28,treePos_y +13,trees_x[i] +112,treePos_y +13,trees_x[i] +44,treePos_y -47);
        triangle(trees_x[i] -8,treePos_y - 27,trees_x[i] +92,treePos_y -27,trees_x[i] +44,treePos_y -87);
        triangle(trees_x[i] +12,treePos_y -67,trees_x[i] +72,treePos_y -67,trees_x[i] +42,treePos_y -127);
            
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
        fill(205,133,63);
        rect(t_canyon.x_pos + 576,432,50,576);
        rect(t_canyon.x_pos +726,432,t_canyon.width +200,576);
        fill(0,0,0);
        rect(t_canyon.x_pos +626,432,t_canyon.width +255,576);
        rect(t_canyon.x_pos +604,450,t_canyon.width +295,576);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if((gameChar_y >= floorPos_y) && (gameChar_world_x > t_canyon.x_pos + 620) && (gameChar_world_x < t_canyon.x_pos +900)){
        isPlummeting == true;
        gameChar_y += 10;
        constrain(gameChar_world_x, t_canyon.x_pos + 576,t_canyon.x_pos +950)
    }
    else{
        isPlummeting == false;
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    fill(218,165,32);
    ellipse(t_collectable.x_pos +50,t_collectable.y_pos +150,t_collectable.size -15,t_collectable.size -15);
    fill(184,134,11);
    ellipse(t_collectable.x_pos +50,t_collectable.y_pos +150,t_collectable.size -30,t_collectable.size -30);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 250){
        t_collectable.isFound = true;
        coinSound.play();
        game_score += 1;
        
    }
}

// Function to change flag when reached

function renderFlagpole(){
    push();
    strokeWeight(5);
    stroke(180);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    fill(255, 80,40);
    noStroke();
    
    if(flagpole.isReached){
      rect(flagpole.x_pos, floorPos_y - 250, 75, 50);  
    }
    else{
        rect(flagpole.x_pos, floorPos_y - 50, 75, 50);
    }
    
    pop();
}

//Function to check character has reached the flag.

function checkFlagpole(){
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d < 15){
        flagpole.isReached = true;
        winSound.play();
    }
}

//Function to determine what happens when character falls

function checkPlayerDie() {
  if (gameChar_y > height) {
    lives -= 1;
      fallingSound.play();
    

    if (lives > 0) {
      startGame();
    }
    
    if(lives == 0){
        gameOverSound.play();
    }
  }
}

//Function to move character back to start

function startGame() {
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    
    
	scrollPos = 0;

	
	gameChar_world_x = gameChar_x - scrollPos;
}

//Function to create the platforms

function createPlatforms(x,y,length){
    
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
        fill(128,0,0);
        rect(this.x, this.y,this.length,20);
        },
        checkContact: function(gc_x,gc_y){
            
            if(gc_x > this.x && gc_x < this.x + this.length){
                
                var d = this.y - gc_y;
                if(d >= 0 && d < 5){
                    return true;
                }
                
            }
            return false;
        }
    }
    return p;
}

//Function to create enemy

function Enemy(x,y,range){
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    this.update = function(){
        
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range){
            this.inc = -1;
        }
        else if(this.currentX < this.x){
            this.inc = 1;
        }
        
    }
    
    this.draw = function(){
        this.update();
        fill(173,255,47);
        ellipse(this.currentX, this.y - 30, 40,40);
        fill(255);
        stroke(0);
        ellipse(this.currentX, this.y - 35, 20,20);
        noStroke();
        fill(255,0,255);
        ellipse(this.currentX, this.y - 35, 8,20);
        fill(0);
        ellipse(this.currentX, this.y - 35, 5,10);
        rect(this.currentX - 5, this.y - 20, 10,6);
    }
    
    //Function to check to checkif character touches enemy
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        
        if(d<25){
            return true;
        }
        return false;
    }
    
}