tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(assets.image`truck3`, SpriteKind.Player)
mySprite.ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
