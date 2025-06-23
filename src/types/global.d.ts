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
    readFile: (file: string) => Promise<string>
    writeFile: (file: string, content: string) => Promise<void>
  }
}
