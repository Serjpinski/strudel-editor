import { ElectronAPI } from "@electron-toolkit/preload";

export {}

declare global {
  declare module '*.png?asset'
  declare module '*.jpg?asset'
  declare module '*.svg?asset'

  interface Window {
    electron: ElectronAPI
    backend: BackendApi
  }

  interface BackendApi {
    listMusicFiles: () => Promise<{ [file: string]: string }>
    updateMusicFile: (
      musicFiles: { [file: string]: string },
      file: string,
      content: string
    ) => Promise<void>
  }
}
