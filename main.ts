input.onButtonPressed(Button.A, function () {
    bewegeMario()
    while (HöheMario != 3) {
        bewegeMario()
    }
})
/**
 * Lösche Mario LED nicht wenn Mario und Kiste auf derselben Position sind
 */
function bewegeMario () {
    if (HöheMario != 3 || Kistenposition != 1) {
        led.unplot(1, HöheMario)
    }
    HöheMario = HöheMario + RichtungMario
    if (HöheMario != 2) {
        RichtungMario = RichtungMario * -1
    }
    led.plot(1, HöheMario)
    basic.pause(100)
}
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
    Kistenposition = 4
    RichtungMario = -1
    HöheMario = 3
}
/**
 * Lösche Kisten LED nicht wenn Mario und Kiste auf derselben Position sind
 */
function verschiebeKiste () {
    if (HöheMario != 3 || Kistenposition != 1) {
        led.unplot(Kistenposition, 3)
    }
    if (Kistenposition == 0) {
        Kistenposition = 4
        AnzahlDurchläufe = AnzahlDurchläufe + 1
        if (AnzahlDurchläufe == 10) {
            basic.showString("WIN!")
            starteNeu()
        }
    } else {
        Kistenposition = Kistenposition - 1
    }
    if (HöheMario == 3 && Kistenposition == 1) {
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
let AnzahlDurchläufe = 0
let RichtungMario = 0
let Kistenposition = 0
let HöheMario = 0
starteNeu()
basic.forever(function () {
    verschiebeKiste()
})
