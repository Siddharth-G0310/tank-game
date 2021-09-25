var tank1, tank1Ammo;
var target;
var score = 0





function preload(){
    
}

function setup() {

createCanvas(windowHeight, windowWidth)
createTank1()
}

function draw() {
    background(1000)
    tank1.x = World.mouseX

    createTarget()

    if(keyDown("space")) {
        tank1Ammo = createSprite(tank1.x, 230, 10, 25)
        tank1Ammo.velocityY = 5
    }

    if(target && tank1Ammo && target.isTouching(tank1Ammo)){
        target.destroy()
        tank1Ammo.destroy()
        score = score+1

        text(score, 10, 200)
    }
    
 
    drawSprites()
}

function createTank1(){
    tank1=createSprite(200, 200, 80, 80)

}

function createTarget(){
    if(frameCount%120 === 0){
        target = createSprite(Math.round(random(0, 600)), 800, 40, 40)
    }

    if(target){
    target.velocityY = -5
    }

    
}
