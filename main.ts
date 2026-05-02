let Time = 0
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
let casa_de_banho = 0
let tomar_banho = 0
let comer = 0
let dormir = 0
let jogar = 0
loops.everyInterval(60000, function () {
    Time += 1
})
basic.forever(function () {
    luz = input.lightLevel()
    temperatura = input.temperature()
})
