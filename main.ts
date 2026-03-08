function temFome () {
    basic.showLeds(`
        . # . . .
        . . . . .
        # # . # .
        . # . . .
        . . . . .
        `)
}
function countdown10s () {
    // for loops 是由0開始到10 , 而變數會儲存到index 上
    for (let index = 0; index <= 10; index++) {
        // 我們需要在micro:bit 上顯示倒數時間, 而index 是由0開始, 所以我們以10和index相減, 得出倒數
        basic.showNumber(10 - index)
        // 為了倒數時間準確, 所以用了1000ms (1秒)來控制
        basic.pause(1000)
    }
}
function tomarBanho () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        # . # . #
        `)
}
function querTomarBanho () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        # . # . #
        `)
}
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
    while (true) {
        countdown10s()
        querTomarBanho()
    }
})
