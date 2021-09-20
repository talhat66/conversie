let uitkomst = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(som(randint(0, 10), randint(0, 10)))
})
function som (getal1: number, getal2: number) {
    uitkomst = getal1 + getal2
    return uitkomst
}
