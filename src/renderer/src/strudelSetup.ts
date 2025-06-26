import { initStrudel, samples } from '@strudel/web'
import { StrudelRepl } from '@strudel/repl'

// Loads strudel-editor
import '@strudel/repl'

const backend = (window as Window).backend as BackendApi
let repl: StrudelRepl

function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    strudelSetup()
  })
}

function strudelSetup(): void {
  initStrudel({
    prebake: () => samples('github:tidalcycles/dirt-samples')
  })

  repl = document.createElement('strudel-editor')

  document.getElementById('strudel')?.append(repl)

  backend.listMusicFiles().then((musicFiles) => {
    const musicFileSelector = document.getElementById('musicFileSelector')
    Object.entries(musicFiles).forEach((musicFile) => {
      const fileName = musicFile[0]
      const option = document.createElement('option')
      option.value = fileName
      option.text = fileName
      musicFileSelector?.appendChild(option)
    })
    musicFileSelector?.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement
      selectMusicFile(musicFiles, target.value)
    })
    selectMusicFile(musicFiles, Object.entries(musicFiles)[0][0])
  })

  document.getElementById('play')?.addEventListener('click', () => repl.editor.evaluate())
  document.getElementById('stop')?.addEventListener('click', () => repl.editor.stop())
}

function selectMusicFile(musicFiles: { [file: string]: string }, file: string): void {
  repl.setAttribute('code', musicFiles[file])
}

init()
