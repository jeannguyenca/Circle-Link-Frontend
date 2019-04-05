const login = (email, password) => {
  return {
    query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
  }
}

export const createUser = (email, password, name, address) => {
  return {
    query: `
          mutation {
            createUser(userInput: {
              email: ${email}, password: ${password}, name: ${name}, address: ${address}
            }, role: "store")
          }
        `
  }
}

export const googleLogin = (code, url) => {
  return {
    query: `
          mutation {
            googleUser(code: "${code}", url: "${url}") {
              userId
              token
              tokenExpiration
            }
          }
        `
  }
}

export default login
