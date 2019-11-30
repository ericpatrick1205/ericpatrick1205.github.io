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
        //var building;
        var l1;
        var l2;        
        var l3;
        var ship;
        var divers;
        //var buildings = [];
        
   
  
        
        // ANIMATION VARIABLES HERE:
        
      
        var ocean;
        //var boat;
        
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
            var backgroundFill = draw.rect(canvasWidth, groundY,'darkBlue');
            background.addChild(backgroundFill);
            
            //var groundFill = draw.bitmap('img/sand.png');
            //background.addChild(groundFill);
            //groundFill.y = groundY;
            //groundFill.x = 0;
            
            ocean = draw.bitmap('img/ocean.png');
            ocean.x = 0;
            ocean.y = groundY -444;
            ocean.scaleX = 1.0;
            ocean.scaleY = 1;
            background.addChild(ocean);
            
            
            
        
            // TODO: 3 - Add a moon and starfield
            ship = draw.bitmap('img/ship.png');
            background.addChild(ship);
            ship.x = 570;
            ship.y = groundY - 420;
            
            divers = draw.bitmap('img/divers.png');
            background.addChild(divers);
            divers.x = 90;
            divers.y= groundY -400;
            
            
        
            
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            //for (var i = 0; i < buildings.length; ++i){
                //building = draw.bitmap('img/building.png');
               // building.x = canvasWidth;
               // building.y = groundY -950;
               // background.addChild(building);
               // buildings.push(building);
            //}
            
            
            
            
            // TODO 4: Part 1 - Add a tree
            
            l3 = draw.bitmap('img/l3.png');
            l3.x =0;
            l3.y = groundY -440;
            background.addChild(l3);
            
            l2 = draw.bitmap('img/l2.png');
            l2.x = 0;
            l2.y = groundY -440;
            background.addChild(l2);
            
            l1 = draw.bitmap('img/l1.png');
            l1.x = 700;
            l1.y = groundY -240;
            background.addChild(l1);
            
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            l3.x = l3.x -0.86;
            if(l3.x < -1920) {
                l3.x = 0;
            }
            
            
            l2.x = l2.x - 1.4;
            if(l2.x < -1920) {
                l2.x = 0;
        }
        
                l1.x = l1.x -2.2;
                if(l1.x <  -1920){
                    l1.x = canvasWidth;
                }
            
            // TODO 5: Part 2 - Parallax
            //for (var i = 0; i < buildings.length; i++){
               // buildings[i].x = buildings[i].x - 1;
                //if(buildings[i].x < -200){
                   // buildings[i].x = canvasWidth;
                //}
          
               // }
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