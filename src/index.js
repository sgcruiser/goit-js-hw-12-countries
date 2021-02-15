import './scss/styles.scss';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import makesCountrySearch from './js/search-country';

refs.inputSearch.addEventListener('input', debounce(makesCountrySearch, 500));
