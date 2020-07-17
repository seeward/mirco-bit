let targetAlive = 0
input.onButtonPressed(Button.A, function () {
    if (targetAlive == 1) {
        targetAlive = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let i = 0; i <= 4; i++) {
        led.plot(i, i)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Brayden")
    targetAlive = 1
})
input.onButtonPressed(Button.B, function () {
    if (targetAlive == 1) {
        targetAlive = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let j = 0; j <= 4; j++) {
        led.plot(4 - j, j)
    }
})
function makeTarget () {
    led.plot(randint(0, 4), randint(0, 4))
}
basic.forever(function () {
    if (targetAlive == 1) {
        makeTarget()
    }
})
