input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 C C C5 C C C5 G ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
