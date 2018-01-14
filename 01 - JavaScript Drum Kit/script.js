
// Play a sound if the key is mapped in the page
const playSound = (e) => {
  // Query to be used in the document.querySelector 
  const query = `data-key="${e.keyCode}"`;

  // querying the audio element that matches the current pressed key.
  const currentAudio = document.querySelector(`audio[${query}]`);

  // If no audio element has been found just return.
  if (!currentAudio) { return; }

  // querying the div corresponding to the current pressed key.
  const currentDiv = document.querySelector(`div[${query}]`);

  // Adding the playing class to the current div.
  currentDiv.classList.add('playing');

  // Making sure that the audio's time is 0 before play.
  currentAudio.currentTime = 0;
  currentAudio.play();
};

// Removing the playing class when the propertyName is equal to transform.
const removePlayingStyle = (e) => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
};

// Adding a listener to remove the playing class when transition has ended.
const addRemovePlayingStyleListener = (keyDiv) =>
  keyDiv.addEventListener('transitionend', removePlayingStyle);


// adding keydown listener
window.addEventListener('keydown', playSound);

// Querying for all div element with the key class.
const keyDivs = document.querySelectorAll('.key');

// adding a remove playing style listener for each div element.
keyDivs.forEach(addRemovePlayingStyleListener);