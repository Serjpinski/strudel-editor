export {}

declare global {
  interface Window {
    backend: BackendApi
  }

  interface BackendApi {
    readFile: (file: string) => Promise<string>
    writeFile: (file: string, content: string) => Promise<void>
  }
}
