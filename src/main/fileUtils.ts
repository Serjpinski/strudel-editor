import fs from 'fs'

export function readFileContent(file: string): string {
  return fs.readFileSync(file, 'utf-8')
}

export function writeFileContent(file: string, content: string): void {
  fs.writeFileSync(file, content, 'utf-8')
}

export function listFiles(folder: string): string[] {
  return fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
}

export function listFileContents(folder: string): { [file: string]: string } {
  return Object.fromEntries(
    listFiles(folder).map((file) => {
      return [file, readFileContent(folder + file)]
    })
  )
}
