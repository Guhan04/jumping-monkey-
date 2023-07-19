controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    JUMPING_MONKEY.y += -15
    pause(350)
    JUMPING_MONKEY.y += 15
    JUMPING_MONKEY.setStayInScreen(true)
    JUMPING_MONKEY.setBounceOnWall(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (JUMPING_MONKEY.overlapsWith(Laser_Beam)) {
        if (true) {
            music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
            music.stopAllSounds()
            game.showLongText("DEFEAT AT THE HANDS OF THE ENEMY!", DialogLayout.Bottom)
            game.setGameOverEffect(false, effects.slash)
            game.gameOver(false)
        }
    } else {
        pause(1250)
        info.changeScoreBy(1)
    }
})
info.onScore(10, function () {
    music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004280000000400021d2a08000c0002202710001400012418001c0002202720002400021d2a28002c000120`), music.PlaybackMode.UntilDone)
    game.showLongText("YOU HAVE DEFEATED THE ENEMY!", DialogLayout.Bottom)
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
let Laser_Beam: Sprite = null
let JUMPING_MONKEY: Sprite = null
scene.setBackgroundImage(assets.image`Jumping Monkey Background`)
JUMPING_MONKEY = sprites.create(assets.image`Jumping Monkey`, SpriteKind.Player)
game.showLongText("Hello My Name is GG! :)", DialogLayout.Bottom)
pause(1000)
game.showLongText("Welcome to JUMPING MONKEY!", DialogLayout.Bottom)
pause(1000)
game.showLongText("Use the Up or W key to jump!", DialogLayout.Bottom)
pause(1000)
game.showLongText("Jump 10 times to win!", DialogLayout.Bottom)
pause(1000)
game.showLongText("Oh, I forgot to mention, be careful of the Ghost shooting lasers....", DialogLayout.Bottom)
let GHOST_ENEMY = sprites.create(assets.image`Ghost Enemy`, SpriteKind.Player)
JUMPING_MONKEY.setPosition(131, 68)
GHOST_ENEMY.setPosition(15, 68)
pause(2000)
for (let index = 0; index < 10; index++) {
    pause(1250)
    Laser_Beam = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 1 1 1 1 1 1 1 1 1 1 1 1 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, GHOST_ENEMY, 300, 0)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
}
