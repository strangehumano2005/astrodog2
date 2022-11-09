function DETECTAR () {
    if (perro.isTouching(hueso)) {
        game.addScore(1)
        hueso.delete()
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # # #
            . # . . #
            . # . . #
            `)
    } else if (perro.isTouching(obstaculo)) {
        game.gameOver()
    } else if (perro.isTouching(OBS)) {
        game.gameOver()
    } else if (perro.isTouching(OBS3)) {
        game.gameOver()
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    perro.change(LedSpriteProperty.X, -1)
    DETECTAR()
})
input.onButtonPressed(Button.AB, function () {
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
let OBS3: game.LedSprite = null
let OBS: game.LedSprite = null
let obstaculo: game.LedSprite = null
let hueso: game.LedSprite = null
let perro: game.LedSprite = null
perro = game.createSprite(0, 2)
hueso = game.createSprite(1, 2)
hueso.set(LedSpriteProperty.Brightness, 250)
let H2 = game.createSprite(2, 5)
H2.set(LedSpriteProperty.Brightness, 250)
let H3 = game.createSprite(4, 3)
H3.set(LedSpriteProperty.Brightness, 250)
obstaculo = game.createSprite(4, 2)
OBS = game.createSprite(3, 4)
OBS3 = game.createSprite(2, 1)
obstaculo.set(LedSpriteProperty.Brightness, 50)
OBS.set(LedSpriteProperty.Brightness, 50)
OBS3.set(LedSpriteProperty.Brightness, 50)
loops.everyInterval(200, function () {
    obstaculo.change(LedSpriteProperty.X, randint(0, 4))
    obstaculo.change(LedSpriteProperty.Y, randint(0, 4))
})
