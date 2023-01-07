import { BASE_URL } from '../../src/utils/constants';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  async _handleResponse(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include'
    })
      .then(res => this._handleResponse(res));
  }

  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      credentials: 'include'
    })
      .then(res => this._handleResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    })
      .then(res => this._handleResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(res => this._handleResponse(res));
  }

  patchProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
      credentials: 'include'
    })
      .then(res => this._handleResponse(res));
  }

  postMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
      credentials: 'include',
    })
      .then((res) => this._handleResponse(res));
  }

  deleteMovie(moviedId) {
    return fetch(`${this._baseUrl}/movies/${moviedId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include'
    })
      .then(res => this._handleResponse(res));
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
      .then((res) => this._handleResponse(res));
  }
}



const mainApi = new MainApi(
  {
    baseUrl: BASE_URL,
    credentials: 'include',
  }
);
export default mainApi;