var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var coralbush2;
        var buildings = [];
        var building;
  
        
        // ANIMATION VARIABLES HERE:
        
      
        var ocean;
        var boat;
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'skyBlue');
            background.addChild(backgroundFill);
            
            ocean = draw.bitmap('img/ocean.png');
            ocean.x = 0;
            ocean.y = groundY -444;
            ocean.scaleX = 1.0;
            ocean.scaleY = 1;
            background.addChild(ocean);
            
            
            
        
            // TODO: 3 - Add a moon and starfield
            // boat = draw.bitmap('img/ship2.png');
            //background.addChild(boat);
            //boat.x = 600;
            //boat.y = 120;
            
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeight = 220;
            var building;
            for (var i = 0; i < 7; ++i){
                building = draw.rect(75, buildingHeight, 'gray', 'white', 1);
                building.x = 900 * i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            
            // TODO 4: Part 1 - Add a tree
            coralbush2 = draw.bitmap('img/coralbush2.png');
            coralbush2.x = 650;
            coralbush2.y = groundY - 105;
            background.addChild(coralbush2);
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            coralbush2.x = coralbush2.x - 2;
            if(coralbush2.x < -200) {
                coralbush2.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++){
                buildings[i].x = buildings[i].x - 1;
                if(buildings[i].x < -200){
                    buildings[i].x = canvasWidth;
                }
          
                }
            }
            
            

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}