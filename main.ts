controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
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
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        `,img`
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
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . e 2 2 2 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        `,img`
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
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        `,img`
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
        . . . . . e 2 2 2 e . . . . . . 
        . . . . . . 2 2 2 e . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        `,img`
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
        `],
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 e e 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    if (player1.vy == 0) {
        player1.vy += -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    player1.setPosition(5, 90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    player1.setPosition(11, 50)
    player1.startEffect(effects.hearts, 500)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 e e 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 e 2 2 . . . . . 
        . . . . . . 2 2 2 e 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . 8 . . . . . . 
        . . . . . . . . . 8 . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 2 e 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 e 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
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
player1.setPosition(11, 50)
