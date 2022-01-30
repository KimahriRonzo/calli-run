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
    AnzahlDurchläufe = 0
    MarioUnten = 1
    Kistenposition = 4
}
function verschiebeKiste () {
    if (MarioUnten == 0 || Kistenposition != 1) {
        led.unplot(Kistenposition, 3)
    }
    if (Kistenposition == 0) {
        Kistenposition = 4
        AnzahlDurchläufe = AnzahlDurchläufe + 1
        if (AnzahlDurchläufe == 10) {
            Win = 1
            basic.showString("WIN!")
            starteNeu()
        }
    } else {
        Kistenposition = Kistenposition - 1
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
let Win = 0
let Kistenposition = 0
let AnzahlDurchläufe = 0
let MarioUnten = 0
starteNeu()
basic.forever(function () {
    verschiebeKiste()
})
