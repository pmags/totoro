basic.showIcon(IconNames.StickFigure)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    while (true) {
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
    }
})
