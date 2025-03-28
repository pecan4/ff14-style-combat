namespace SpriteKind {
    export const HUD = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Game) {
        if (controlset == 1) {
            if (magic_statusbar.value >= 50) {
                magic_statusbar.value += -50
                health_statusbar.value += 25
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controlset += 1
    if (controlset > 1) {
        controlset = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Game) {
        if (controlset == 1) {
            if (magic_statusbar.value >= 25) {
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    mySprite.setVelocity(-250, 0)
                } else if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
                    mySprite.setVelocity(250, 0)
                }
                magic_statusbar.value += -25
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Game) {
        if (controlset == 1) {
            if (magic_statusbar.value >= 10) {
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    projectile2 = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, 150, 0)
                    sprites.setDataNumber(projectile2, "damage", 15)
                } else if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
                    projectile2 = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, -150, 0)
                    sprites.setDataNumber(projectile2, "damage", 15)
                }
                magic_statusbar.value += -10
            }
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy, 400, function (sprite) {
    if (sprite.vx > 0) {
        sprites.setDataString(sprite, "direction", "right")
    } else if (sprite.vx < 0) {
        sprites.setDataString(sprite, "direction", "left")
    }
    if (!(sprites.readDataBoolean(sprite, "attacking"))) {
        if (sprites.readDataString(sprite, "direction") == "left") {
            animation.runImageAnimation(
            sprite,
            [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `],
            100,
            true
            )
        } else if (sprites.readDataString(sprite, "direction") == "right") {
            animation.runImageAnimation(
            sprite,
            [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `],
            100,
            true
            )
        }
    } else {
        if (sprites.readDataString(sprite, "direction") == "left") {
            animation.runImageAnimation(
            sprite,
            [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c c . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f c 3 b c 3 b c f b b c c c . 
                f c b b b b b b c f b c b c c . 
                c c 1 b b b 1 b c b b c b b c . 
                c b b b b b b b b b c c c b c . 
                c b 1 f f 1 c b b c c c c c . . 
                c f 1 f f 1 f b b b b f c . . . 
                f f f f f f f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 2 b b b c f . . . . 
                . . f 2 2 2 b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . c c . c c . . . . . . . . 
                . . f 3 c c 3 c c c . . . . . . 
                . f c 3 b c 3 b c c c . . . . . 
                f c b b b b b b b b f f . . . . 
                c c 1 b b b 1 b b b f f . . . . 
                c b b b b b b b b c f f f . . . 
                c b 1 f f 1 c b b f f f f . . . 
                f f 1 f f 1 f b c c b b b . . . 
                f f f f f f f b f c c c c . . . 
                f f 2 2 2 2 f b f b b c c c . . 
                . f 2 2 2 2 2 b c c b b c . . . 
                . . f 2 2 2 b f f c c b b c . . 
                . . . f f f f f f f c c c c c . 
                . . . . . . . . . . . . c c c c 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c 1 1 b b b 1 1 b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `],
            100,
            true
            )
        } else if (sprites.readDataString(sprite, "direction") == "right") {
            animation.runImageAnimation(
            sprite,
            [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . c c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 c f f 
                . c c b c b f c b b b b b b c f 
                . c b b c b b c b 1 b b b 1 c c 
                . c b c c c b b b b b b b b b c 
                . . c c c c c b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f c 
                . . . c f b b b b f f f f f f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b 2 2 2 2 2 f . 
                . . . . . f c b b b 2 2 2 f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . c c . . . 
                . . . . . . c c c 3 c c 3 f . . 
                . . . . . c c c b 3 c b 3 c f . 
                . . . . f f b b b b b b b b c f 
                . . . . f f b b b 1 b b b 1 c c 
                . . . f f f c b b b b b b b b c 
                . . . f f f f b b c 1 f f 1 b c 
                . . . b b b c c b f 1 f f 1 f f 
                . . . c c c c f b f f f f f f f 
                . . c c c b b f b f 2 2 2 2 f f 
                . . . c b b c c b 2 2 2 2 2 f . 
                . . c b b c c f f b 2 2 2 f . . 
                . c c c c c f f f f f f f . . . 
                c c c c . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b 1 1 b b b 1 1 c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `],
            100,
            true
            )
        }
    }
    if (spriteutils.distanceBetween(mySprite, sprite) <= 200) {
        if (spriteutils.distanceBetween(mySprite, sprite) <= 16) {
            sprite.follow(mySprite, 100)
        } else {
            sprite.follow(mySprite, 75)
        }
    } else {
        sprite.follow(mySprite, 0)
    }
    if (!(spriteutils.distanceBetween(mySprite, sprite) <= 16)) {
        if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom))) {
            sprite.setVelocity(0, -125)
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left))) {
            sprite.setVelocity(0, -125)
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right))) {
            sprite.setVelocity(0, -125)
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right))) {
        	
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left))) {
        	
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
        	
        } else if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
        	
        } else {
        	
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Game) {
        if (controlset == 1) {
        	
        }
    }
})
let projectile2: Sprite = null
let In_Game = false
let magic_statusbar: StatusBarSprite = null
let health_statusbar: StatusBarSprite = null
let controlset = 0
let mySprite: platformer.PlatformerSprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level`)
mySprite = platformer.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
platformer.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
100,
platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving)
)
platformer.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
100,
platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving)
)
platformer.moveSprite(mySprite, true, 60)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, true)
platformer.setConstantDefault(platformer.PlatformerConstant.MaxJumpHeight, 50)
let HUD_sprite = sprites.create(image.create(160, 34), SpriteKind.HUD)
HUD_sprite.image.fill(11)
spriteutils.drawTransparentImage(assets.image`Control HUD MOVE`, HUD_sprite.image, 0, 0)
HUD_sprite.setFlag(SpriteFlag.RelativeToCamera, true)
HUD_sprite.setPosition(80, 103)
controlset = 0
health_statusbar = statusbars.create(140, 7, StatusBarKind.Health)
magic_statusbar = statusbars.create(140, 7, StatusBarKind.Magic)
magic_statusbar.setColor(8, 11)
health_statusbar.setColor(7, 2, 6)
health_statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
magic_statusbar.setFlag(SpriteFlag.RelativeToCamera, true)
health_statusbar.setFlag(SpriteFlag.RelativeToCamera, true)
magic_statusbar.setPosition(80, 25)
health_statusbar.setPosition(80, 7)
In_Game = true
let Magic_textsprite = fancyText.create("Magic", 0, 15, fancyText.bold_sans_7)
let Health_textsprite = fancyText.create("Health", 0, 15, fancyText.bold_sans_7)
Magic_textsprite.setFlag(SpriteFlag.RelativeToCamera, true)
Health_textsprite.setFlag(SpriteFlag.RelativeToCamera, true)
Magic_textsprite.setPosition(80, 33)
Health_textsprite.setPosition(80, 15)
let Enemy_sprite = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
sprites.setDataNumber(Enemy_sprite, "health", 50)
sprites.setDataBoolean(Enemy_sprite, "attacking", false)
tiles.placeOnTile(Enemy_sprite, tiles.getTileLocation(40, 9))
game.onUpdate(function () {
    if (In_Game) {
        if (controlset == 0) {
            if (controller.down.isPressed()) {
            	
            } else {
                magic_statusbar.value += 0.1
            }
        } else {
            magic_statusbar.value += 0.1
        }
    }
})
forever(function () {
    if (In_Game) {
        if (controlset == 1) {
            HUD_sprite.image.fill(11)
            spriteutils.drawTransparentImage(assets.image`Control HUD ATTACK`, HUD_sprite.image, 0, 0)
            platformer.moveSprite(mySprite, false)
        } else if (controlset == 0) {
            HUD_sprite.image.fill(11)
            spriteutils.drawTransparentImage(assets.image`Control HUD MOVE`, HUD_sprite.image, 0, 0)
            if (magic_statusbar.value >= 0.75) {
                if (controller.down.isPressed()) {
                    magic_statusbar.value += -0.75
                    platformer.moveSprite(mySprite, true, 175)
                } else {
                    platformer.moveSprite(mySprite, true, 60)
                }
            } else {
                platformer.moveSprite(mySprite, true, 60)
            }
        }
    }
})
