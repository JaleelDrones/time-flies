controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.over(true, effects.confetti)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.playMelody("A - B D F C5 A C ", 120)
scene.setBackgroundImage(assets.image`Background`)
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
mySprite.setPosition(85, 80)
mySprite2 = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
mySprite2.setVelocity(200, 100)
mySprite2.setBounceOnWall(true)
info.startCountdown(10)
