class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }


    update(state) {

        database.ref("/").update({
            gameState: state
        })

    }


    async start() {
        if (gameState === 0) {
            player = new Player(); 
            var playerCountRef = await database.ref('playerCount').once("value"); 
            if(playerCountRef.exists())
        { playerCount = playerCountRef.val(); 
              
            player.getCount();
         }
             form = new Form()
              form.display();
            
        }

        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars = [car1,car2,car3,car4];
    }

play(){
    form.hide()
    textSize(30);
    text("gameisstarting",150,100)
    Player.getPlayerinfo()
    if (allPlayers !== undefined ){
        //var displayposition = 160;
        var index = 0;
        var x = 0;
        var y;  
       
    for (var plr in allPlayers){
        index = index+1
        x = x+200;
        y = height-allPlayers[plr].distance;
        cars[index-1].x = x
        cars[index-1].y = y

        if(index === player.index){
            cars[index-1].shapeColor = "red";
            camera.position.y = cars[index-1].y; 
            camera.position.x =  width/2     
        }
        drawSprites();

        //displayposition+=20;
        //text(allPlayers[plr].name+": "+ allPlayers[plr].distance,150,displayposition)

    }    
    if(keyDown(UP_ARROW)&&player.index !== null ){

        player.distance+=10
        player.update();

    }

    }




}

}

