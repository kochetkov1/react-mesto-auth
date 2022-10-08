import logo from "../images/header-logo.svg";
import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function Header(props) {
  const { email, onSignOut } = props;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта Mesto" />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="header__user-block">
                <p className="header__email">{email}</p>
                <button className="header__button" onClick={onSignOut}>
                  Выйти
                </button>
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <Link to="/signin" className="header__link">
                Войти
              </Link>
            }
          />

          <Route
            path="/signin"
            element={
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
            }
          />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default Header;
