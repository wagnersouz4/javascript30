/* Getting elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('.full-screen');

/* Listeners functions */
function handleSkipping() {
    video.currentTime += Number(this.dataset.skip);
}

function handleSliding() {
    video[this.name] = this.value;
}

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    const percentage = scrubTime * 100 / video.duration;
    video.currentTime = scrubTime;
};

const togglePlaying = () => {
    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
};


const updateProgress = () => {
    const percentage = video.currentTime * 100 / video.duration;
    progressBar.style.flexBasis = `${percentage}%`;
};

const updatePlayPauseButton = () =>
    playButton.innerHTML = (video.paused) ? '►' : '❚ ❚';

const goFullScreen = () => {
    const method = video.requestFullscreen || video.mozRequestFullScreen || video.webkitRequestFullscreen;
    video[method.name]();
};


/* Hooking up events */
video.addEventListener('click', togglePlaying);
video.addEventListener('play', updatePlayPauseButton);
video.addEventListener('pause', updatePlayPauseButton);
video.ontimeupdate = updateProgress;

skipButtons.forEach(skipButton => skipButton.addEventListener('click', handleSkipping));


playButton.addEventListener('click', togglePlaying);

sliders.forEach(slider => slider.addEventListener('input', handleSliding));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

fullScreenButton.addEventListener('click', goFullScreen)