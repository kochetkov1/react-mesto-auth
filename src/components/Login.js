
function Login() {
  return (
    <div className="register__container">
      <h2 className="popup__title register__title">Вход</h2>
      <form
        className="popup__form register__form"
        name="register__form"
        noValidate
      >
        <input
          type="email"
          className="popup__input register__input"
          id="login-email"
          name="login-email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="40"
          // value={""}
          // onChange={""}
        />
        <input
          type="password"
          className="popup__input register__input"
          id="login-password"
          name="login-password"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="200"
          // value={""}
          // onChange={""}
        />
        <button
          type="submit"
          className="popup__save-button register__submit-button"
          // onClick={""}
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;