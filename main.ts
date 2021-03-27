controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy += -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    player1.setPosition(5, 90)
})
let player1: Sprite = null
player1 = sprites.create(img`
    . . . f f f f f f f f f . . . . 
    . . f f f f f f f f f f f . . . 
    . f f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f . . 
    . . . e e e e e e e e e . . . . 
    . . . e e f e e e f e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1, 100, 0)
scene.cameraFollowSprite(player1)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
player1.ay = 500
