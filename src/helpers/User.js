import axios from "axios";

export default class User {
  constructor(username) {
    this.username = username;
  }
  getUserData() {
    return axios
      .get(
        "https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/player?user=" +
          this.username
      )
      .then(result => {
        return result;
      });
  }
}
