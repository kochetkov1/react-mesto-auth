export const BASE_URL = "https://auth.nomoreparties.co";

function handleServerResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка. Запрос не выполнен: ${res.status}`);
}

function register(email, password) {
  return fetch(`${this._url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then(handleServerResponse);
}

function authorization(email, password) {
  return fetch(`${this._url}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then(handleServerResponse);
}

function getContent(jwt) {
  return fetch(`${this._url}/users/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`
    }
  }).then(handleServerResponse);
}

export {register, authorization, getContent};