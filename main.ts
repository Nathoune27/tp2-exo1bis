function LED () {
    while (true) {
        for (let var2 = 0; var2 <= 4; var2++) {
            led.unplot(posX[var2], posY[var2])
            if (posY[var2] <= 0) {
                listeVar[var2] = 1
            } else if (posY[var2] >= 4) {
                listeVar[var2] = -1
            }
            posY[var2] = posY[var2] + listeVar[var2]
            led.plot(posX[var2], posY[var2])
            basic.pause(25)
        }
    }
}
let listeVar: number[] = []
let posY: number[] = []
let posX: number[] = []
posX = [4, 3, 2, 1, 0]
posY = [4, 3, 2, 1, 0]
listeVar = [1, 1, 1, 1, 0]
for (let var1 = 0; var1 <= 4; var1++) {
    led.plot(posX[var1], posY[var1])
}
LED()
