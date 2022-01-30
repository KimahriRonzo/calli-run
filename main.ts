input.onButtonPressed(Button.A, function () {
    MarioUnten = 0
    led.unplot(1, 3)
    led.plot(1, 2)
    basic.pause(100)
    led.unplot(1, 2)
    led.plot(1, 1)
    basic.pause(100)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(100)
    led.unplot(1, 2)
    led.plot(1, 3)
    MarioUnten = 1
    AnzahlSprünge = AnzahlSprünge + 1
    if (AnzahlSprünge == 10) {
        Win = 1
        basic.showString("WIN!")
    }
})
function starteNeu () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        `)
    AnzahlSprünge = 0
    MarioUnten = 1
    Kistenposition = 4
    Win = 0
}
function verschiebeKiste () {
    led.unplot(Kistenposition, 3)
    if (Kistenposition == 0) {
        Kistenposition = 4
    } else {
        Kistenposition = Kistenposition - 1
        if (Win == 1) {
            starteNeu()
        }
    }
    if (MarioUnten == 1 && Kistenposition == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # . .
            . . # # .
            # # # # #
            `)
        basic.showLeds(`
            . # . . #
            . # . # .
            . . . . .
            . . . # #
            # # # # #
            `)
        basic.showLeds(`
            . # . . #
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        starteNeu()
    }
    led.plot(Kistenposition, 3)
    basic.pause(200)
}
let Kistenposition = 0
let Win = 0
let AnzahlSprünge = 0
let MarioUnten = 0
starteNeu()
basic.forever(function () {
    verschiebeKiste()
})
