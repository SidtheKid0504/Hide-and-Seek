class Menu {
    constructor() {
        this.title = createElement("h1");
        this.nameInput = createInput("Enter Name Here: ");
        this.playButton = createButton("Play");
        this.greeting = null;
    }

    hide() {
        this.title.hide();
        this.nameInput.hide();
        this.playButton.hide();

        if (this.greeting !== null) {
            this.greeting.hide();
        }
    }

    show () {
        this.title.show();
        this.nameInput.show();
        this.playButton.show();
    }

    display() {
        background(mainMenuBG);

        this.nameInput.position(displayWidth / 2 - 140, displayHeight/2 + 60);
        this.nameInput.style('font-size', 30 + "px");

        this.playButton.position(displayWidth / 2 - 40, displayHeight / 2 + 130);
        this.playButton.style('font-size', 40 + 'px', 'background-color', '#D2DCDE');

        this.playButton.mousePressed(() => {
            this.title.hide();
            this.playButton.hide();
            this.nameInput.hide();

            playground = createSprite(displayWidth/4 + 60, displayHeight/2, 20, 20);
            playground.addImage(playgroundImg);

            bedroom = createSprite(displayWidth/2 + 350, displayHeight /2, 20, 20);
            bedroom.addImage(bedroomImg);
            
            playground.onMouseOver = () => {
                playground.addImage(playgroundHoverImg);
                cursor(CROSS);
            }

            playground.onMouseOut = () => {
                playground.addImage(playgroundImg);
            }

            bedroom.onMouseOver = () => {
                bedroom.addImage(bedroomHoverImg);
            }

            bedroom.onMouseOut = () => {
                bedroom.addImage(bedroomImg);
            }


            playground.onMousePressed = () => {
                player.mapChoice = "Playground";
                playerCount++;
                player.index = playerCount;
                player.update();
                player.updatePlayerCount(playerCount);
                playground.remove();
                bedroom.remove();
            }

            bedroom.onMousePressed = () => {
                player.mapChoice = "Bedroom";
                playerCount++;
                player.index = playerCount;
                player.update();
                player.updatePlayerCount(playerCount);
                bedroom.remove();
                playground.remove();
            }
            player.name = this.nameInput.value();

            this.greeting = createElement("h3");
            this.greeting.html("Hello " + player.name + ", pick the map you want to play on:");
            this.greeting.position(displayWidth / 4 - 250, 0);
            this.greeting.style('font-size', 48 + "px");
        });
    }
}