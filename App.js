export const fakeAuth = {
  isAuthenticated: false,
  user: null,
  login(email, password) {
    this.isAuthenticated = true;
    this.user = { email, favorites: [], orderHistory: [] };
    return this.user;
  },
  signup(email, password) {
    this.isAuthenticated = true;
    this.user = { email, favorites: [], orderHistory: [] };
    return this.user;
  },
  logout() {
    this.isAuthenticated = false;
    this.user = null;
  }
};
