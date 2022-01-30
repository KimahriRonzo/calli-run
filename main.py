def on_button_pressed_a():
    global MarioUnten, AnzahlSprünge
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
    if AnzahlSprünge == 3:
        basic.show_string("WIN!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def starteNeu():
    global AnzahlSprünge, MarioUnten
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # # # #
        """)
    AnzahlSprünge = 0
    MarioUnten = 1
AnzahlSprünge = 0
MarioUnten = 0
starteNeu()

def on_forever():
    led.plot(4, 3)
    basic.pause(200)
    led.unplot(4, 3)
    led.plot(3, 3)
    basic.pause(200)
    led.unplot(3, 3)
    led.plot(2, 3)
    basic.pause(200)
    led.unplot(2, 3)
    if MarioUnten == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # . .
            # . # . .
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . . . # .
            # # # # #
            """)
        basic.show_leds("""
            . # . . #
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            """)
        starteNeu()
    else:
        led.plot(1, 3)
        basic.pause(200)
        led.unplot(1, 3)
        basic.pause(200)
        led.plot(0, 3)
        basic.pause(200)
        led.unplot(0, 3)
        basic.pause(200)
basic.forever(on_forever)
