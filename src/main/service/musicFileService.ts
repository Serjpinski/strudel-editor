import * as fileUtils from '../fileUtils'

const musicFolder = __dirname + '/../../../strudel-music/music/'

export function listMusicFiles(): { [file: string]: string } {
  return fileUtils.listFileContents(musicFolder)
}

export function updateMusicFile(
  musicFiles: { [file: string]: string },
  file: string,
  content: string
): void {
  if (musicFiles[file] !== content) {
    musicFiles[file] = content
    fileUtils.writeFileContent(musicFolder + file, content)
  }
}
