export default class Service {
  constructor() {}

  static getUsers() {
    return fetch("https://fakestoreapi.com/users").then((res) => res.json());
  }

  static getUserCarts(userId) {
    const url = "https://fakestoreapi.com/carts/user/" + userId;
    return fetch(url).then((res) => res.json());
  }
}
