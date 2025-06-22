import { ipcMain } from 'electron'
import { readFileContent, writeFileContent } from './fileUtils'

ipcMain.handle('read-file', async (_: Electron.IpcMainInvokeEvent, file: string) => {
  return readFileContent(file)
})

ipcMain.handle(
  'write-file',
  async (_: Electron.IpcMainInvokeEvent, filePath: string, content: string) => {
    writeFileContent(filePath, content)
  }
)
