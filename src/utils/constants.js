const BASE_URL = 'https://api.alexanderloginov713.nomoredomains.icu';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const SHORT_MOVIES = 40;
const DEVICE_PARAMS = {
  desktop: {
    width: 1280,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 768,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 489,
    cards: {
      total: 5,
      more: 2,
    },
  },
};
export {
  BASE_URL,
  MOVIES_URL,
  SHORT_MOVIES,
  DEVICE_PARAMS
}