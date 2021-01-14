radio.setGroup(1)
basic.forever(function () {
    if (gamePad.keyState(GamerBitPin.P1)) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # . . .
            `)
        radio.sendNumber(5)
    } else if (gamePad.keyState(GamerBitPin.P2)) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        radio.sendNumber(6)
    } else if (gamePad.keyState(GamerBitPin.P8)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(1)
    } else if (gamePad.keyState(GamerBitPin.P13)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(2)
    } else if (gamePad.keyState(GamerBitPin.P14)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(3)
    } else if (gamePad.keyState(GamerBitPin.P15)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(4)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        radio.sendNumber(0)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
