input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    end_time = 0
    start_time = 0
})
input.onButtonPressed(Button.B, function () {
    end_time = input.runningTime()
    basic.showNumber(end_time - start_time)
})
let end_time = 0
let start_time = 0
basic.showString("Press A")
basic.forever(function () {
    basic.showNumber(end_time - start_time)
})
