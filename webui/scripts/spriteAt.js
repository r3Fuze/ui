const sprites = require("./sprites.json")

const x = process.argv[2]
const y = process.argv[3]

if (x === undefined || y === undefined) {
  console.log("Please input x and y")
  process.exit(1)
}

console.log(x, y)

sprites.forEach((sprite) => {
  sprite.states.forEach((state) => {
    if (
      x > state.minUv.x &&
      x < state.maxUv.x &&
      y > state.minUv.y &&
      y < state.maxUv.y
    ) {
      console.log(`${sprite.name}, ${state.name}`)
      console.log(state)
    }
  })
})
