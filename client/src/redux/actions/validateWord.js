import { apiRequestPending, apiRequestError, updateWord } from './index';

function validateWord(word) {
  return dispatch => {
    dispatch(apiRequestPending());
    return fetch('/api/v1/games/validate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word: word.toLowerCase() })
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        if (json) {
          dispatch(updateWord(word));
        }
      })
      .catch(error => {
        dispatch(apiRequestError(error));
      });
  };
}

export default validateWord;
