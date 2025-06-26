import { ipcMain } from 'electron'
import * as musicFileService from '../service/musicFileService'

ipcMain.handle('listMusicFiles', async () => {
  return musicFileService.listMusicFiles()
})

ipcMain.handle(
  'updateMusicFile',
  async (
    _: Electron.IpcMainInvokeEvent,
    musicFiles: { [p: string]: string },
    file: string,
    content: string
  ) => {
    musicFileService.updateMusicFile(musicFiles, file, content)
  }
)
