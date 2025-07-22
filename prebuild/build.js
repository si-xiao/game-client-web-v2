import fs from "fs";
import path from "path";

console.log("build > check version start！")

function getRootPath(...dir) {
  return path.resolve(process.cwd(), ...dir)
}
// 构建生产包时添加版本文件
const runBuild = async () => {
  try {
    const OUTPUT_DIR = "dist"
    const VERSION = "version.json"
    const versionJson = {
      version: "V_" + Math.floor(Math.random() * 10000) + Date.now()
    }
    fs.writeFileSync(getRootPath(`./${OUTPUT_DIR}/${VERSION}`), JSON.stringify(versionJson))
    console.log(`version file is build successfully!`)
  } catch (error) {
    console.error("version build error:\n" + error)
    process.exit(1)
  }
}
runBuild().then(r => {})

console.log("build > check version end！")
