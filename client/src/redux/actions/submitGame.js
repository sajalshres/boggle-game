import { apiRequestPending, apiRequestError, resetGame } from './index';

function submitGame(game) {
  return dispatch => {
    dispatch(apiRequestPending());
    return fetch('/api/v1/games/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        if (json) {
          dispatch(resetGame());
        }
      })
      .catch(error => {
        dispatch(apiRequestError(error));
      });
  };
}

export default submitGame;
