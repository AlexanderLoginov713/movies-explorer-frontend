import { React, useState, useEffect } from 'react';
import { Route, Navigate, useNavigate, useLocation, Routes } from 'react-router-dom';

import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

import useEscapePress from '../../hooks/useEscapePress.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    message: '',
  });
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
  const footerEndpoints = ['/movies', '/saved-movies', '/'];
  const currentLocation = useLocation();

  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  useEscapePress(onClickBurger, isBurgerOpened);

  const handleGoBackClick = () => navigate('/');

  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  const handleElementRouteCheck = (routesArr) =>
    routesArr.some((route) => route === currentLocation.pathname);


  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi
      .createUser(name, email, password)
      .then(data => {
        if (data.email) {
          handleLogin({ email, password });
        }
      })
      .catch((err) => {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          message: err,
        });

      })
      .finally(() => setIsLoader(false));
  }

  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi
      .login(email, password)
      .then(jwt => {
        localStorage.setItem('jwt', jwt.token);
        setLoggedIn(true);
        navigate('/movies');
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          message: 'Добро пожаловать!',
        });

      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          message: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  function handleProfile({ name, email }) {
    setIsLoader(true);
    mainApi
      .patchProfile(name, email)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          message: 'Данные обновлены!',
        });
      })
      .catch((err) => {
        if (err.statusCode === 401) {
          handleSignOut();
        }
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          message: err,
        });
      })
      .finally(() => setIsLoader(false));
  }

  function handleSaveMovie(movie) {
    mainApi
      .postMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch((err) => {
        if (err.statusCode === 401) {
          handleSignOut();
        }
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          message: err,
        });
      });
  };

  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => {
        if (err.statusCode === 401) {
          handleSignOut();
        }
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          message: err,
        });
      });
  }

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser({ data });
            navigate(path);
          }
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            message: err,
          })
        )
        .finally(() => {
          setIsLoader(false);
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
  }, []);


  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(res => setCurrentUser(res))
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            message: err,
          })
        )
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner === currentUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch(err =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            message: err,
          })
        );
    }
  }, [currentUser, loggedIn]);

  return (
    <div className="app">
      {!load ? (
        <Preloader isOpen={isLoader} />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>

          {handleElementRouteCheck(headerEndpoints) && (
            <Header
              loggedIn={loggedIn}
              onClickBurger={onClickBurger}
              isBurgerOpened={isBurgerOpened}
            />
          )}
          <Routes>
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route
                path='/movies'
                element={
                  <Movies
                    setIsLoader={setIsLoader}
                    setIsInfoTooltip={setIsInfoTooltip}
                    savedMoviesList={savedMoviesList}
                    onLikeClick={handleSaveMovie}
                    onDeleteClick={handleDeleteMovie}
                  />
                }
              />
              <Route
                path='/saved-movies'
                element={
                  <SavedMovies
                    savedMoviesList={savedMoviesList}
                    onDeleteClick={handleDeleteMovie}
                    setIsInfoTooltip={setIsInfoTooltip}
                  />
                }
              />
              <Route
                path='/profile'
                element={
                  <Profile
                    handleProfile={handleProfile}
                    handleSignOut={handleSignOut}
                  />
                }
              />
            </Route>
            <Route exact path='/' element={<Main />} />
            <Route
              path='/signup'
              element={
                loggedIn ? (
                  <Navigate to='/' replace />
                ) : (
                  <Register
                    handleRegister={handleRegister}
                  />
                )
              }
            />
            <Route
              path='/signin'
              element={
                loggedIn ? (
                  <Navigate to='/' replace />
                ) : (
                  <Login
                    handleLogin={handleLogin}
                  />
                )
              }
            />
            <Route
              path='/404'
              element={<NotFound onClick={handleGoBackClick} />}
            />
            <Route path='*' element={<Navigate to='/404' replace />} />
          </Routes>

          <Preloader isOpen={isLoader} />
          {handleElementRouteCheck(footerEndpoints) && <Footer />}

          <InfoTooltip
            status={isInfoTooltip}
            onClose={closeInfoTooltip}
          />

        </CurrentUserContext.Provider>

      )}
    </div>
  );
}

