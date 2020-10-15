const { VextPackPlugin } = require("vextpack")

module.exports = {
  webpack: {
    plugins: [
      new VextPackPlugin({
        compilerPath: "../../..",
        hotReloadSupport: process.env.NODE_ENV === "development",
      }),
    ],
  },
}
