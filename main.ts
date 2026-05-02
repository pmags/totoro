let temperatura = 0
let luz = 0
if (luz <= 150) {
    basic.showLeds(`
        . # # # #
        . # . . .
        . # . . .
        . # . # #
        . # # # #
        `)
}
if (luz > 150) {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    if (temperatura > 20) {
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            `)
    } else if (temperatura < 12) {
        basic.showLeds(`
            . . # # .
            . . # # .
            . # # # .
            . . # # .
            . . . . .
            `)
    } else {
        basic.showString("Nice!")
    }
}
basic.showIcon(IconNames.StickFigure)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.clearScreen()
let casa_de_banho = randint(0, 3)
let tomar_banho = randint(0, 6)
let comer = randint(0, 6)
let dormir = 0
let jogar = randint(0, 4)
loops.everyInterval(60000, function () {
    casa_de_banho += 0.2
    comer += 0.2
    dormir += 0.2
    jogar += 0.2
    tomar_banho += 0.2
})
basic.forever(function () {
    luz = input.lightLevel()
    temperatura = input.temperature()
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    if (dormir == 24) {
        basic.showLeds(`
            # . # . #
            . . # . .
            # # # # #
            . # # # #
            . # # # #
            `)
    } else if (comer == 6) {
    	
    } else if (casa_de_banho == 3) {
    	
    } else if (jogar == 4) {
    	
    } else if (tomar_banho == 6) {
    	
    } else {
    	
    }
})
