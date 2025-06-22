import fs from "fs";
import path from "path";


export function readFileContent(file: string): string {

  const filePath = path.join(__dirname, file);
  return fs.readFileSync(filePath, 'utf-8');
}

export function writeFileContent(file: string, content: string): void {

  const filePath = path.join(__dirname, file);
  fs.writeFileSync(filePath, content, 'utf-8');
}

