import { ipcRenderer } from 'electron'

export const backendApi: BackendApi = {
  listMusicFiles: () => ipcRenderer.invoke('listMusicFiles'),
  updateMusicFile: (musicFiles: { [file: string]: string }, file: string, content: string) =>
    ipcRenderer.invoke('updateMusicFile', musicFiles, file, content)
}
