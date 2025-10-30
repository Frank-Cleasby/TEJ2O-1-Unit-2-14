/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program moves a pixel in clock ways
*/

// variables
let sprite: game.LedSprite = null
let xVariable: number = 0
let yVariable: number = 0

// clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// pixel move clockwise
input.onButtonPressed(Button.A, function () {
    xVariable = 0
    yVariable = 0
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    sprite.set(LedSpriteProperty.X, xVariable)
    sprite.set(LedSpriteProperty.Y, yVariable)

    while (xVariable < 5) {
        sprite.set(LedSpriteProperty.X, xVariable)
        xVariable = xVariable + 1
        basic.pause(200)
    }

    while (yVariable < 5) {
        sprite.set(LedSpriteProperty.Y, yVariable)
        yVariable = yVariable + 1
        basic.pause(200)
    }

    while (xVariable >= 0) {
        sprite.set(LedSpriteProperty.X, xVariable)
        xVariable = xVariable - 1
        basic.pause(200)
    }

    while (yVariable >= 0) {
        sprite.set(LedSpriteProperty.Y, yVariable)
        yVariable = yVariable - 1
        basic.pause(200)
    }
    basic.pause(500)
    sprite.delete()
    basic.showIcon(IconNames.Giraffe)
})

// pixel move counter clockwise
input.onButtonPressed(Button.B, function () {
    xVariable = 5
    yVariable = 5
    basic.clearScreen()
    sprite = game.createSprite(5, 5)
    sprite.set(LedSpriteProperty.X, xVariable)
    sprite.set(LedSpriteProperty.Y, yVariable)

    while (xVariable >= 0) {
        sprite.set(LedSpriteProperty.X, xVariable)
        xVariable = xVariable - 1
        basic.pause(200)
    }

    while (yVariable >= 0) {
        sprite.set(LedSpriteProperty.Y, yVariable)
        yVariable = yVariable - 1
        basic.pause(200)
    }

    while (xVariable < 5) {
        sprite.set(LedSpriteProperty.X, xVariable)
        xVariable = xVariable + 1
        basic.pause(200)
    }

    while (yVariable < 5) {
        sprite.set(LedSpriteProperty.Y, yVariable)
        yVariable = yVariable + 1
        basic.pause(200)
    }
    basic.pause(500)
    sprite.delete()
    basic.showIcon(IconNames.Giraffe)
})
