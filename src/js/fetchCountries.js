const url = `https://restcountries.eu/rest/v2/name/`;

function fetchCountries(searchQuery) {
  return fetch(url + `${searchQuery}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export default fetchCountries;
