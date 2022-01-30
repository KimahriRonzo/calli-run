def on_button_pressed_a():
    global MarioUnten, Win
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
    if AnzahlSprünge == 10:
        Win = 1
        basic.show_string("WIN!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def starteNeu():
    global AnzahlSprünge, MarioUnten, Kistenposition, Win
    basic.show_leds("""
        # # # # #
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        """)
    basic.pause(200)
    basic.show_leds("""
        . # # # .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        """)
    basic.pause(200)
    basic.show_leds("""
        . . # . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . # . . #
        # # # # #
        """)
    AnzahlSprünge = 0
    MarioUnten = 1
    Kistenposition = 4
    Win = 0
def verschiebeKiste():
    global Kistenposition
    if MarioUnten == 0 or Kistenposition != 1:
        led.unplot(Kistenposition, 3)
    if Kistenposition == 0:
        pass
    else:
        Kistenposition = Kistenposition - 1
        if Win == 1:
            starteNeu()
    if MarioUnten == 1 and Kistenposition == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . # . # .
            . # # . .
            . . # # .
            # # # # #
            """)
        basic.show_leds("""
            . # . . #
            . # . # .
            . . . . .
            . . . # #
            # # # # #
            """)
        basic.show_leds("""
            . # . . #
            . . . . .
            . . . . .
            . . . . #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(500)
        starteNeu()
    led.plot(Kistenposition, 3)
    basic.pause(200)
Kistenposition = 0
Win = 0
AnzahlSprünge = 0
MarioUnten = 0
starteNeu()

def on_forever():
    verschiebeKiste()
basic.forever(on_forever)
