class Api {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _handleServerResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка. Запрос не выполнен: ${res.status}`);
  }

  getUserProfile() {
    this._userProfile = fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._userProfile;
  }

  getInitialCards() {
    this._initialCards = fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._initialCards;
  }

  setUserProfile(userInfo) {
    this._settedUserProfile = fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      }),
    }).then(this._handleServerResponse);
    return this._settedUserProfile;
  }

  addCard(cardInfo) {
    this._addedCard = fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link,
      }),
    }).then(this._handleServerResponse);
    return this._addedCard;
  }

  deleteCard(id) {
    this._deletedCard = fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._deletedCard;
  }

  // Смена состояния лайка
  changeLikeCardStatus(id, isLiked) {
    this._updateLike = fetch(`${this._url}/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._updateLike;
  }

  updateAvatar(url) {
    this._updatedAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._handleServerResponse);
    return this._updatedAvatar;
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-48",
  headers: {
    authorization: "6b344dfe-98cc-405b-b96d-fa3acd60d0b1",
    "Content-Type": "application/json",
  },
});

export default api;
