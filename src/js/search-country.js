import refs from './refs';
import listCountries from '../templates/list-countries.hbs';
import country from '../templates/country.hbs';
import countriesApi from './fetchCountries';
import renderingQuery from './query-rendering';

function makesCountrySearch(event) {
  event.preventDefault();
  refs.resultSearch.innerHTML = '';
  const countrySearch = event.target.value;

  if (countrySearch !== '') {
    return countriesApi(countrySearch).then(checksQueryResult);
  }
}

function checksQueryResult(data) {
  if (data.status === 404) {
    const arg = 'error';

    renderingQuery(arg);
    return;
  }

  if (data.length > 10) {
    const arg = 'notice';

    renderingQuery(arg, data.length);
    return;
  }

  if (data.length >= 2 && data.length <= 10) {
    const arg = 'info';
    const markup = listCountries(data);

    renderingQuery(arg, data.length, markup);
    return;
  }

  if (data.length === 1) {
    const arg = 'success';
    const markup = country(data);

    renderingQuery(arg, data.length, markup);
    refs.inputSearch.value = '';
    return;
  }
}

export default makesCountrySearch;
