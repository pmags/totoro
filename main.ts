input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.clearScreen()
    esta_acordado = 0
})
input.onGesture(Gesture.FreeFall, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    if (esta_acordado == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # . . #
                # . . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                # . . # .
                . # . . #
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        jogar = 0
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        esta_acordado = 1
    }
})
let jogar = 0
let esta_acordado = 0
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
esta_acordado += 1
let casa_de_banho = randint(0, 3)
let tomar_banho = randint(0, 8)
let comer = randint(0, 5)
let dormir = 0
jogar = randint(0, 4)
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
    if (esta_acordado == 1) {
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
        if (casa_de_banho >= 2) {
        	
        } else if (casa_de_banho >= 3) {
        	
        } else {
        	
        }
        if (comer >= 5) {
        	
        } else if (comer >= 6) {
        	
        } else {
        	
        }
        if (jogar >= 5) {
        	
        } else if (jogar >= 6) {
        	
        } else {
        	
        }
        if (tomar_banho >= 8) {
        	
        } else if (tomar_banho >= 10) {
        	
        } else {
        	
        }
        if (dormir >= 24) {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        basic.clearScreen()
    }
})
