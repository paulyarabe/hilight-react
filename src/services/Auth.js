class Auth {

  static login(loginParams) {
    return fetch('https://web-060517.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(loginParams)
    })
    .then(res => res.json())
  }

  static currentUser(){
    fetch('https://web-060517.herokuapp.com/api/v1/me', {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })
    .then(res => res.json())
  }

  static logout() {
    localStorage.clear()
  }

}

export default Auth
