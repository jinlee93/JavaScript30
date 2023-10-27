const inputEl = document.querySelector('.search');
const listEl = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities = data);

// [
//   {
//       "city": "New York", 
//       "growth_from_2000_to_2013": "4.8%", 
//       "latitude": 40.7127837, 
//       "longitude": -74.0059413, 
//       "population": "8405837", 
//       "rank": "1", 
//       "state": "New York"
//   }
// ]

let cities = [];
const handleInput = function () {
  const searchTerm = this.value.toLowerCase();
  if (!searchTerm.length) {
    listEl.innerHTML = `
      <li>Filter for a city</li>
      <li>or a state</li>
    `
    return;
  }
  const regex = new RegExp(searchTerm, 'ig');
  const filteredCities = cities.filter((city) =>
    (city.city + ' | ' + city.state).search(regex) !== -1
  );
  const innerHTML = filteredCities.reduce((htmlString, city) => {
    const cityString = city.city + ', ' + city.state ;
    const replacedCityString = cityString.replaceAll(regex, (match) => 
      `<span class="hl">${match}</span>`
    );
    const currentHtmlString = `
      <li>
        <span class="name">${replacedCityString}</span>
        <span class="population">${Number(city.population).toLocaleString()}</span>
      </li>
    `
    return htmlString + currentHtmlString;
  }, '');
  listEl.innerHTML = innerHTML;
}

inputEl.addEventListener('input', handleInput);