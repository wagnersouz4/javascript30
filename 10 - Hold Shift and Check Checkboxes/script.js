// Input boxes list
const checkboxes = [...document.querySelectorAll('.inbox input[type="checkbox"]')];

let lastChecked;

function handleClick(e) {
  let isInBetween = false;
  
  if (e.shiftKey && this.checked) { 
    checkboxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastChecked) { console.log('starting');  isInBetween = !isInBetween; }
      if (isInBetween) { checkBox.checked = true; }
    }); 
  }

  lastChecked = this;
};

const addClickListener = inputBox => inputBox.addEventListener('click', handleClick);
checkboxes.forEach(addClickListener);