function DETECTAR () {
    if (perro.isTouching(hueso1)) {
        score += 1
        hueso1.delete()
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # . . .
                . # # # #
                . # # # .
                . # . # .
                `)
        }
    } else if (perro.isTouching(hueso2)) {
        score += 1
        hueso2.delete()
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # . . .
                . # # # #
                . # # # .
                . # . # .
                `)
        }
    } else if (perro.isTouching(hueso3)) {
        score += 1
        hueso3.delete()
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # . . .
                . # # # #
                . # # # .
                . # . # .
                `)
        }
    } else if (perro.isTouching(obstaculo1)) {
        basic.showIcon(IconNames.No)
        basic.showNumber(score)
        basic.showString("LOSER")
    } else if (perro.isTouching(obstaculo2)) {
        basic.showIcon(IconNames.No)
        basic.showNumber(score)
        basic.showString("LOSER")
    } else if (perro.isTouching(obstaculo3)) {
        basic.showIcon(IconNames.No)
        basic.showNumber(score)
        basic.showString("LOSER")
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    perro.change(LedSpriteProperty.X, -1)
    DETECTAR()
})
input.onPinPressed(TouchPin.P2, function () {
    perro.change(LedSpriteProperty.Y, 1)
    DETECTAR()
})
input.onButtonPressed(Button.B, function () {
    perro.change(LedSpriteProperty.X, 1)
    DETECTAR()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    perro.change(LedSpriteProperty.Y, -1)
    DETECTAR()
})
let obstaculo3: game.LedSprite = null
let obstaculo1: game.LedSprite = null
let obstaculo2: game.LedSprite = null
let hueso3: game.LedSprite = null
let hueso2: game.LedSprite = null
let hueso1: game.LedSprite = null
let perro: game.LedSprite = null
let score = 0
score = 0
perro = game.createSprite(0, 2)
hueso1 = game.createSprite(randint(0, 4), randint(0, 4))
hueso1.set(LedSpriteProperty.Brightness, 128)
hueso2 = game.createSprite(randint(0, 4), randint(0, 4))
hueso2.set(LedSpriteProperty.Brightness, 128)
hueso3 = game.createSprite(randint(0, 4), randint(0, 4))
hueso3.set(LedSpriteProperty.Brightness, 128)
obstaculo2 = game.createSprite(4, 2)
obstaculo1 = game.createSprite(3, 4)
obstaculo3 = game.createSprite(2, 1)
obstaculo2.set(LedSpriteProperty.Brightness, 30)
obstaculo1.set(LedSpriteProperty.Brightness, 30)
obstaculo3.set(LedSpriteProperty.Brightness, 30)
loops.everyInterval(200, function () {
    obstaculo2.change(LedSpriteProperty.X, randint(0, 4))
    obstaculo2.change(LedSpriteProperty.Y, randint(0, 4))
})
