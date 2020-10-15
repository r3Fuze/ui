import { join } from "path"
import { spawn } from "child_process"
import del from "del"

const options = {
  vuiccPath: "../../..",
  sourcePath: "./build",
  outputPath: "../",
}

async function build() {
  const deleted = await del([
    "build/**/*.{map,LICENSE.txt}",
    "build/{service-worker,precache,asset-manifest}*",
  ])
  console.log(`deleted ${deleted.length} useless files`)

  const child = spawn(
    join(options.vuiccPath, "vuicc.exe"),
    [options.sourcePath, join(options.outputPath, "ui.vuic")],
    {
      stdio: "inherit",
      cwd: process.cwd(),
    }
  )

  child.on("close", (code) => console.log(`vuicc exited with code ${code}`))
}

build()
