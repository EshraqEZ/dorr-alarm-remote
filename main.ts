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
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    music.setVolume(0)
})
basic.forever(function () {
    radio.setGroup(69)
})
