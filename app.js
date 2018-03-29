
function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop the function from running
     // rewind it to the start
    audio.currentTime = 0;
    if(audio.paused && key.classList.contains("loop")){
        audio.play();
    }else{
        audio.pause()
    }

    if(!key.classList.contains("loop")){
        audio.play()
    }

    key.classList.add('playing');

}

function mobilPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    const key = document.querySelector(`div[data-key="${e.target.id}"]`);

    if(!audio) return; //stop the function from running
    // rewind it to the start
    audio.currentTime = 0;
    if(audio.paused && key.classList.contains("loop")){
        audio.play();
    }else{
        audio.pause()
    }

    if(!key.classList.contains("loop")){
        audio.play()
    }

    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if its not a transform
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend', removeTransition));
keys.forEach(key=>key.addEventListener('click', mobilPlay));

window.addEventListener('keydown', playSound);



