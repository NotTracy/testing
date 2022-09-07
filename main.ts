input.onButtonPressed(Button.A, function () {
    let variable_a = 0
    basic.showNumber(variable_a)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.showArrow(ArrowNames.South)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playMelody("- - - - - - - - ", 120)
})
