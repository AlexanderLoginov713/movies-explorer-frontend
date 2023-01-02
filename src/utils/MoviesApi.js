import { MOVIES_URL } from '../utils/constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
      })
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => this._handleResponse(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
});

export default moviesApi;