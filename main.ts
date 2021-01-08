while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
        break
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
        break
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
        break
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
        break
    }
    
}
