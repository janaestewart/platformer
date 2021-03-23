let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(5, 121)
