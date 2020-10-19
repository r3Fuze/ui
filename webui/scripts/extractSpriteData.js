const fs = require("fs")
const iconJson = require("./Hud3dIcons.json")

const icons = iconJson.$instances[0].$fields.Icons.$value

const width = 256
const height = 1024

let final = []

icons.forEach((i) => {
  if (i.States.$value.length === 0) {
    return
  }

  let icon = {
    name: i.IconType.$enumValue.replace("ICon", "Icon"),
    states: [],
  }

  i.States.$value.forEach((s) => {
    const info = s.TextureInfos.$value[0]
    const minX = Math.floor(width * info.MinUv.$value.x.$value)
    const minY = Math.floor(height * info.MinUv.$value.y.$value)
    const maxX = Math.floor(width * info.MaxUv.$value.x.$value)
    const maxY = Math.floor(height * info.MaxUv.$value.y.$value)

    let state = {
      name: s.State.$enumValue,
      width: maxX - minX,
      height: maxY - minY,
      x: minX,
      y: minY,
      minUv: {
        x: minX,
        y: minY,
      },
      maxUv: {
        x: maxX,
        y: maxY,
      },
    }

    icon.states.push(state)
  })

  final.push(icon)
})

fs.writeFileSync("src/sprites.json", JSON.stringify(final))
fs.writeFileSync("scripts/sprites.json", JSON.stringify(final, null, 2))

console.log("Saved 'sprites.json'")
