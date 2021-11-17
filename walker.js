//this file defines walker class which acts like a bouncing ball
class Walker {
    constructor(x, y, maxSpeed) {
        this.x = x;
        this.y = y;
        this.dirX = random(-maxSpeed, maxSpeed);
        this.dirY = random(-maxSpeed, maxSpeed);
        this.age = 1;
        colorMode(HSB, 360, 100, 100, 255);
    }
    //updates the position of walker with the dirX and dirY variables
    //checks to make sure it is still on screen
    //advances age tracker
    update(){
        this.x += this.dirX;
        this.y += this.dirY;
        this.age++;
        this.keepOnScreen();
    }
    //draws a line from current position to the x and y input to the function
    display(partnerX, partnerY){
        stroke(this.age % 360, 100, 100);
        line(this.x, this.y, partnerX, partnerY);
    }
    //flips the direction of travel if the object exceeds bounds of canvas
    keepOnScreen(){
        if ((this.x <= 0) || (this.x >= width)){
            this.dirX *= -1;
        }
        if ((this.y <= 0) || (this.y >= height)){
            this.dirY *= -1;
        }
    }
}