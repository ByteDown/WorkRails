import auth0 from 'auth0-js';

// TODO: Should be an env var
const REDIRECT_URI = 'http://localhost:8080/callback'

const auth0instance = new auth0.WebAuth({
  domain: 'workrailsapp.auth0.com',
  clientID: 'nYaKQtjMC9tol6Zs8KJ3HwX5LBTkxaL3',
  // TODO: Ensure the redirectUri is in an environment variable
  redirectUri: REDIRECT_URI,
  audience: 'https://workrailsapp.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
});

export default class Auth {
  login() {
    auth0instance.authorize();
  }
}
