import {initStrudel, samples} from '@strudel/web';
import {StrudelRepl} from '@strudel/repl';

// Loads strudel-editor
import '@strudel/repl';

const backend = (window as any).backend as any;

function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    strudelSetup()
  })
}

function strudelSetup(): void {

  initStrudel({
    prebake: () => samples('github:tidalcycles/dirt-samples'),
  });

  const repl = document.createElement('strudel-editor') as StrudelRepl;

  document.getElementById('strudel')?.append(repl);
  document.getElementById('play')?.addEventListener('click', () => repl.editor.evaluate());
  document.getElementById('stop')?.addEventListener('click', () => repl.editor.stop());

  backend.readFile('../../music/example').then(content => {
    console.log(content);
    repl.setAttribute('code', content);
  });
}

init();
