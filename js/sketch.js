let ball
let p1
let p2

let G1
let G2

function setup () {
    createCanvas(windowWidth, windowHeight)
    p1 = new Paddle(1, color('red'))
    p2 = new Paddle(2, color('blue'))
    G1= new Goal(1, color('#333'))
    G2= new Goal(2, color('#333'))
    ball = new Ball() 
}

function draw () {
    background('#0f962b')
    drawLine()
    G1.drawGoal()
    G2.drawGoal()
    ball.draw()
    ball.move()
    if(ball.collision(p1) || ball.collision(p2))
        ball.move()
    let checkScore = ball.checkScore()
    if(checkScore === 2) //Anotó player 2
        p2.updateScore()
    else if(checkScore === 1)
        p1.updateScore()
    p1.draw()
    p2.draw()
    if (keyIsPressed) {

        if(keyIsDown(87))
            p1.move(-1)
        if(keyIsDown(83))
            p1.move(1)
        if(keyIsDown(65))
            p1.move(-2)
        if(keyIsDown(68))
            p1.move(2)
        
        if(keyIsDown(UP_ARROW))
            p2.move(-1)
        if(keyIsDown(DOWN_ARROW))
            p2.move(1)
        if(keyIsDown(LEFT_ARROW))
            p2.move(-2)
        if(keyIsDown(RIGHT_ARROW))
            p2.move(2)
        
    }
    showScore()
}



const drawLine = function () {
    stroke('#fff')
    strokeWeight(4)
    line(width / 2, 0, width / 2, height)
}

const showScore = function () {
    fill('#fff')
    textSize(50)
    text(p1.getScore(), width * 0.25, 70)
    text(p2.getScore(), width * 0.75, 70)
}
