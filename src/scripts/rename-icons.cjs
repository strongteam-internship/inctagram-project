const fs = require('fs');
const {join} = require("node:path");

const fsp = fs.promises

const dirWithIcons = 'src/assets/svg/components'

async function main() {
  const files = await fsp.readdir(dirWithIcons)

  files.forEach(async (file) => {
    const filePath = join(dirWithIcons, file)
    const fileContent = await fsp.readFile(filePath, 'utf8')
    const newFileContent = fileContent.replace(`import type { SVGProps } from 'react'`,`import { Ref, SVGProps, forwardRef, memo } from 'react'`).replaceAll(`import { Ref, forwardRef, memo } from 'react'`,'')

    fsp.writeFile(filePath, newFileContent)
  })

}

void main()
