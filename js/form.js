class Form {
    constructor() {

         this.input = createInput("name")
         this.button = createButton("play")
         this.greeting = createElement("h3")

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }





    display() {
        var title = createElement("h1");
        title.html("Car Racing");
        title.position(width/2,0)

        
        this.input.position(width/2-50,height/2);

        
        this.button.position(width/2-20,height/2+50)

        

    this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()
            this.greeting.html("Welcome " + player.name)
            this.greeting.position(width/2-50,height/2);

            playerCount++;
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()

        })




    }


}