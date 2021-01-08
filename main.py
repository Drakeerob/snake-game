
while True:
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        """)
        break
    elif input.button_is_pressed(Button.B):
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        """)
        break
    elif input.button_is_pressed(Button.AB):
        basic.show_leds("""
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        """)
        break
    elif input.pin_is_pressed(TouchPin.P2):
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        """)
        break
