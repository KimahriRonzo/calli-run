input.onButtonPressed(Button.A, function () {
    MarioUnten = 0
    led.unplot(1, 3)
    led.plot(1, 2)
    basic.pause(200)
    led.unplot(1, 2)
    led.plot(1, 1)
    basic.pause(200)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(200)
    led.unplot(1, 2)
    led.plot(1, 3)
    MarioUnten = 1
    AnzahlSprünge = AnzahlSprünge + 1
    if (AnzahlSprünge == 3) {
        basic.showString("WIN!")
    }
})
function starteNeu () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    AnzahlSprünge = 0
    MarioUnten = 1
}
let AnzahlSprünge = 0
let MarioUnten = 0
starteNeu()
basic.forever(function () {
    led.unplot(4, 3)
    led.plot(3, 3)
    basic.pause(200)
    led.unplot(3, 3)
    led.plot(2, 3)
    basic.pause(200)
    led.unplot(2, 3)
    if (MarioUnten == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # . # . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . . # .
            # # # # #
            `)
        basic.showLeds(`
            . # . . #
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            `)
        starteNeu()
    } else {
        led.plot(1, 3)
        basic.pause(200)
        led.unplot(1, 3)
        basic.pause(200)
        led.plot(0, 3)
        basic.pause(200)
        led.unplot(0, 3)
        basic.pause(200)
        led.plot(4, 3)
        basic.pause(200)
    }
})
