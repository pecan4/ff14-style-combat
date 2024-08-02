namespace SpriteKind {
    export const HUD = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
            }
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
let controlset = 0
let mySprite: platformer.PlatformerSprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = platformer.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f 2 f e e e e f f f . . . 
    . . f 2 2 2 f e e e e f f f . . 
    . . f e e e e f f e e e f f . . 
    . f e 2 2 2 2 e e f f f f e f . 
    . f 2 e f f f f 2 2 2 e f 2 f . 
    . f f f e e e f f f f f f f f . 
    . f e e 4 4 f b e 4 4 e f f f . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f f . . . 
    . . . f 2 2 2 e d d 4 2 f . . . 
    . . . f 2 2 2 e d d e 2 f . . . 
    . . . f 5 5 4 f e e f 5 f . . . 
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
platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, false)
let HUD_sprite = sprites.create(image.create(160, 34), SpriteKind.HUD)
HUD_sprite.image.fill(11)
spriteutils.drawTransparentImage(assets.image`Control HUD MOVE`, HUD_sprite.image, 0, 0)
HUD_sprite.setFlag(SpriteFlag.RelativeToCamera, true)
HUD_sprite.setPosition(80, 103)
controlset = 1
let health_statusbar = statusbars.create(140, 7, StatusBarKind.Health)
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
game.onUpdate(function () {
    magic_statusbar.value += 0.1
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
            if (controller.down.isPressed()) {
                if (magic_statusbar.value >= 1) {
                    magic_statusbar.value += -1
                    platformer.moveSprite(mySprite, true, 175)
                }
            } else {
                platformer.moveSprite(mySprite, true, 60)
            }
        }
    }
})
