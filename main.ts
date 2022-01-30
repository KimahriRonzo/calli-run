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
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
