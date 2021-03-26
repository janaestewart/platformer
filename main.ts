controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.y += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    player1.setPosition(5, 90)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    player1.y += 10
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
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(player1)
player1.setPosition(5, 121)
