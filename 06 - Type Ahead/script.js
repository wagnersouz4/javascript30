const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data).sort());

const isMatching = (city, regex) => 
  city.city.match(regex) || city.state.match(regex);

const findMatches = (wordToMatch, cities) => {
  const regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(city => isMatching(city, regex));
};

const formatWithCommas = number => number
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const createHtml = (city, regex, value) => {
  const cityAndStateHighlighted = `${city.city}, ${city.state}`
    .replace(regex, `<span class="hl">${value}</span>`);
  return `
    <li>
      <span class="name">${cityAndStateHighlighted}</span>
      <span class="population">${formatWithCommas(city.population)}</span>
    </li>
  `;
};

function displayMatches() {
  if (this.value !== '') {
    const regex = new RegExp(this.value, 'gi');
    const html = findMatches(this.value, cities)
      .map(city => createHtml(city, regex, this.value))
      .join('');

    suggestions.innerHTML = html;
  }
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);