import {ipcMain} from "electron";
import {readFileContent, writeFileContent} from "./musicLoader";


ipcMain.handle('read-file', async (_: any, file: string) => {
  return readFileContent(file);
});

ipcMain.handle('write-file', async (_: any, filePath: string, content: string) => {
  writeFileContent(filePath, content);
});
