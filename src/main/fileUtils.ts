import fs from 'fs'

export function readFileContent(file: string): string {
  return fs.readFileSync(file, 'utf-8')
}

export function writeFileContent(file: string, content: string): void {
  fs.writeFileSync(file, content, 'utf-8')
}

export function listFolderFiles(folder: string): string[] {
  return fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
}
