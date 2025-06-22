import {ipcRenderer} from "electron";

export const backendAPI = {
  readFile: (file: string) => ipcRenderer.invoke('read-file', file),
  writeFile: (file: string, content: string) => ipcRenderer.invoke('write-file', file, content)
};
