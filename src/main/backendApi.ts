import { ipcMain } from 'electron'
import { readFileContent, writeFileContent } from './fileUtils'

const musicFolder = __dirname + '/../../../strudel-music/music/'

ipcMain.handle('read-file', async (_: Electron.IpcMainInvokeEvent, file: string) => {
  return readFileContent(musicFolder + file)
})

ipcMain.handle(
  'write-file',
  async (_: Electron.IpcMainInvokeEvent, file: string, content: string) => {
    writeFileContent(musicFolder + file, content)
  }
)
