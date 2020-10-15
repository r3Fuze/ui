const fs = require("fs/promises")
const { createCanvas, loadImage } = require("canvas")

const sprites = require("./sprites.json")

const canvas = createCanvas(256, 1024)
const ctx = canvas.getContext("2d")

draw()

async function draw() {
  const image = await loadImage("src/assets/sprites.png")
  ctx.drawImage(image, 0, 0, 256, 1024)

  ctx.strokeStyle = "red"

  sprites.forEach((sprite) => {
    sprite.states.forEach((state) => {
      ctx.strokeRect(state.x, state.y, state.width, state.height)
    })
  })

  await fs.writeFile("./image.png", canvas.toBuffer("image/png"))
}
