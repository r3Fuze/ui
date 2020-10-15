const { VextPackPlugin } = require("vextpack")

module.exports = {
  webpack: {
    plugins: [
      new VextPackPlugin({
        compilerPath: "../../..",
        hotReloadSupport: true,
      }),
    ],
  },
}
