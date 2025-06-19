import { Strudel } from '@strudel/web'

initStrudel({
  prebake: () => samples('github:tidalcycles/dirt-samples'),
});

document.getElementById('play').addEventListener('click',
  () => s("bd sd").play()
)
