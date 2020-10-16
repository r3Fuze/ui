const { VextPackPlugin } = require("vextpack")
const postcss = require("postcss")

const pxIgnore = ["border"]

const pxRegex = new RegExp(/(\d+)px/gi)
const postcssPlugin = postcss.plugin("postcss-px-to-vh", () => {
  return (root) => {
    root.walkDecls((decl) => {
      if (pxIgnore.indexOf(decl.prop) === -1) {
        decl.value = decl.value.replace(
          pxRegex,
          (_, px) => (parseFloat(px) / 1080) * 100 + "vh"
        )
      }
    })
  }
})

module.exports = {
  webpack: {
    plugins: [
      new VextPackPlugin({
        compilerPath: "../../..",
        hotReloadSupport: process.env.NODE_ENV === "development",
      }),
    ],
  },
  style: {
    postcss: {
      plugins: [postcssPlugin],
    },
  },
}
