def on_a_pressed():
    player1.y += -10
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_a_released():
    player1.y += 10
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

player1: Sprite = None
player1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(player1)
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(player1)
player1.set_position(5, 121)