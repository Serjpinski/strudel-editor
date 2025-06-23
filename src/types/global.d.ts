export {}

declare global {
  declare module '*.png?asset'
  declare module '*.jpg?asset'
  declare module '*.svg?asset'

  interface Window {
    backend: BackendApi
  }

  interface BackendApi {
    readFile: (file: string) => Promise<string>
    writeFile: (file: string, content: string) => Promise<void>
  }
}
