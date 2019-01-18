import store from 'store';

const TOKEN = 'TOKEN';
const CURRENT_USER = 'CURRENT_USER';

export default {
  getCurrentUser: function() {
    console.log('getCurrentUser');
    return store.get(CURRENT_USER);
  },
  setCurrentUser: function(user) {
    let currentUser = store.set(CURRENT_USER, JSON.stringify(user));
    return currentUser;
  },
  removeCurrentUser: function() {
    return store.remove(CURRENT_USER);
  },
  getToken: function() {
    return store.get(TOKEN);
  },
  setToken: function(token) {
    return store.set(TOKEN, token);
  },
  removeToken: function() {
    return store.remove(TOKEN);
  }
};
