import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  async login(user) {
    const response = await axios
      .post(API_URL + 'signin', {
        userID: user.userID,
        password: user.password
      });
    if (response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', user)
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      userID: user.userID,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password
    });
  }
}

export default new AuthService();