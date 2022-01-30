input.onButtonPressed(Button.A, function () {
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
})
basic.forever(function () {
    led.plot(4, 3)
    basic.pause(500)
    led.unplot(4, 3)
    led.plot(3, 3)
    basic.pause(500)
    led.unplot(3, 3)
    led.plot(2, 3)
    basic.pause(200)
    led.unplot(2, 3)
    led.plot(1, 3)
    basic.pause(500)
    led.unplot(1, 3)
    basic.pause(500)
    led.plot(0, 3)
    basic.pause(500)
    led.unplot(0, 3)
    basic.pause(500)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # # # #
        `)
})
