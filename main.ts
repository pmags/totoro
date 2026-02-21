basic.showIcon(IconNames.StickFigure)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let Time = 0
basic.pause(100)
loops.everyInterval(60000, function () {
    Time += 1
})
basic.forever(function () {
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
    if (Time > 1) {
        basic.showNumber(Time)
    }
})
