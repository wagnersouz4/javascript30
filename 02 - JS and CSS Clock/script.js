// Linking each clock arm (second, minute and hor)
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Updating second
const updateSecond = (secondElement) => {
  const now = new Date();
  const seconds = now.getSeconds();
  const degrees = ((seconds / 60) * 360) + 90;
  secondElement.style.transform = `rotate(${degrees}deg)`;
};

// Updating minute
const updateMinute = (minuteElement) => {
  const now = new Date();
  const minutes = now.getMinutes();
  const degrees = ((minutes / 60) * 360) + 90;
  minuteElement.style.transform = `rotate(${degrees}deg)`;

};

// Updating second
const updateHour = (hourElement) => {
  const now = new Date();
  const hours = now.getHours();
  const degrees = ((hours / 12) * 360) + 90;
  hourElement.style.transform = `rotate(${degrees}deg)`;
};

const setTime = () => {
  updateSecond(secondHand);
  updateMinute(minuteHand);
  updateHour(hourHand);
};

// Calling the function each second
setInterval(setTime, 1000);