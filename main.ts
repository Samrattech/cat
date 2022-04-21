controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        hops_and_awes.vy = -150
    }
})
let hops_and_awes: Sprite = null
scene.setBackgroundColor(9)
hops_and_awes = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f . . . . 
    . . . . . . . . . . . f . . . . 
    . . . . . . . . . . . f f f f . 
    f f . . . . . . . . . f f f f f 
    f . . . . . . . . . . f f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f f . . 
    . . f . f . . . . . . f . f . . 
    . . f . f . . . . . . f . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops_and_awes, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hops_and_awes.ay = 350
scene.cameraFollowSprite(hops_and_awes)
