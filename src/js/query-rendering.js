import refs from './refs';
import setNotification from './notification';

function renderingQuery(arg, lengthArray, markup) {
  setNotification(arg, lengthArray);
  if (!markup) {
    return;
  }
  refs.resultSearch.insertAdjacentHTML('beforeend', markup);
}

export default renderingQuery;
