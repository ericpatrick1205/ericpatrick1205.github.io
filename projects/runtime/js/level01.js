var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                
                {type: 'anchor',x:890,y:0},         // max can jump over is 15 
                {type: 'anchor', x:2500, y:0},     //75 is max that you can duck
                {type: 'anchor', x:1990, y:0},
                {type: 'anchor', x:3002, y:0},
                {type: 'anchor', x:3400, y:0},
                {type: 'anchor', x:3800, y:0},
                {type: 'anchor', x:4200, y:0},
                {type: 'anchor', x:4650, y:0},
                
                {type: 'torpedo',x:500,y:78},
                {type: 'torpedo',x:1500,y:78},
                {type: 'torpedo', x:3001, y:80},
                {type: 'torpedo', x:3110, y:76},
                {type: 'torpedo', x:3800, y:76},  
                {type: 'torpedo', x:4300, y:76},
                {type: 'torpedo', x:5799, y:76},
                {type: 'torpedo', x:7799, y:76},
                {type: 'torpedo', x:8800, y:76},
                {type: 'torpedo', x:10000, y:76},
                {type: 'torpedo', x:15000, y:76}
            ]
        };      //TREASURECHEST DREW//
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        
        var enemy =  game.createGameItem('enemy',25);
        var starFish = draw.bitmap('img/starfish.png');
        starFish.x = -50;
        starFish.y = -50;
        enemy.addChild(starFish);
        enemy.x = 3000;
        enemy.y = groundY - 50;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.rotationalVelocity = 2.5;
        enemy.onPlayerCollision = function(){
          game.changeIntegrity(100); //postive num gives back integ, neg takes it away 
         
        };
        
        enemy.onProjectileCollision = function(){
        game.increaseScore(-5000);
        game.changeIntegrity(-1000);
        enemy.flyTo(0, 0);
        
        };
        
        
        function createChest(x, y){
        var reward=  game.createGameItem('reward', 70);
        var gem = draw.bitmap('img/chest.png');
        gem.x = -95;
        gem.y = -100;
        reward.addChild(gem);
        reward.x = x;
        reward.y = groundY -25 -y;
        game.addGameItem(reward);
        reward.velocityX = -1.5;
        reward.onPlayerCollision = function(){
          game.increaseScore(1500);
          reward.fadeOut();
         
        };
        
        }
        
        createChest(5000, 0 );// keep y at 0
        
        
        function createGem(x, y){
        var reward =  game.createGameItem('reward', 28);
        var gem = draw.bitmap('img/gem.png');
        gem.x = -40;
        gem.y = -35;
        reward.addChild(gem);
        reward.x = x;
        reward.y = groundY -21 -y;
        game.addGameItem(reward);
        reward.velocityX = -2.5;
        reward.onPlayerCollision = function(){
          game.increaseScore(150);
          reward.fadeOut();
         
        };
        
        }
        
        
        createGem(4020, 120); //y max = 155 (eric prob would like 120)
        
        

 
        function createCoin(x, y){
        var reward =  game.createGameItem('reward', 25);
        var coin = draw.bitmap('img/coin.png');
        coin.x = -30;
        coin.y = -27;
        reward.addChild(coin);
        reward.x = x;
        reward.y = groundY -18 -y;
        game.addGameItem(reward);
        reward.velocityX = -2.5;
        //reward.rotationalVelocity = 3;
        reward.onPlayerCollision = function(){
          game.increaseScore(100);
          reward.fadeOut();
         
        };
        
        }
        
        createCoin(2300, 130); //y = 145 is the max jump only the top of the head touches(130 ERic likes this height)
        
        
        
        function createShark(x, y){
        var enemy =  game.createGameItem('enemy', 50);
        var shark = draw.bitmap('img/shark.png');
        shark.x = -50;
        shark.y = -65;
        enemy.addChild(shark);
        enemy.x = x;
        enemy.y = groundY - y;
        game.addGameItem(enemy);
        enemy.velocityX = -3.5;
        enemy.onPlayerCollision = function(){
          game.changeIntegrity(-55); //postive num gives back integ, neg takes it away 
         
        };
        
        enemy.onProjectileCollision = function(){
        game.increaseScore(1000);
        enemy.shrink();
        
        };
        }
        
        createShark(2000, 80);
        
                function createShark2(x, y){
        var enemy =  game.createGameItem('enemy', 50);
        var shark2 = draw.bitmap('img/shark2.png');
        shark2.x = -50;
        shark2.y = -65;
        enemy.addChild(shark2);
        enemy.x = x;
        enemy.y = groundY -100 -y;
        game.addGameItem(enemy);
        enemy.velocityX = -3.5;
        enemy.onPlayerCollision = function(){
          game.changeIntegrity(-70); //postive num gives back integ, neg takes it away 
         
        };
        
        enemy.onProjectileCollision = function(){
        game.increaseScore(2000);
        enemy.shrink();
        
        };
        }
        
        createShark2(4200, 0);
        
        
        

        
        function createAnchor(x, y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = groundY -20 -y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/anchor.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -30;
        obstacleImage.y = -30;
        myObstacle.velocityX = -2.5;
        }
        
       
        
        

        
        function createTorpedos(x, y){
        var hitZoneSize = 25;
        var damageFromObstacle = 15;
        
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = groundY -25 -y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/torpedo.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -50;
        obstacleImage.y = -6;
        myObstacle.velocityX = -7;
        }
        


        
        for (var i = 0; i <= levelData.gameItems.length; i++){
            if (levelData.gameItems[i].type === 'torpedo'){
                createTorpedos(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            
            else if (levelData.gameItems[i].type === 'anchor'){
                createAnchor(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
        }

        };
    };

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}