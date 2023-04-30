radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.setVolume(255)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
basic.forever(function () {
    radio.setGroup(69)
})
