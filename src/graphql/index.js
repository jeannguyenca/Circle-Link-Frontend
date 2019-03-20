import { gql } from "apollo-boost";

// import 

/*------- Query -------*/
export const SIGNIN_USER = gql `
 query ($email: String!, $password: String!) {
  login(email: $email, password: $password){
    tokenExpiration
    userId
    role
    token
    
  }
}
`;





/*------- Mutation -------*/
export const SIGNUP_USER = gql `
  mutation ($email: String!, $password: String!, $name: String, $address: String, $role: String ) {
  createUser(userInput: {
    email: $email, 
    password: $password, 
    name: $name, 
    address: $address
  }, role: $role){
    email
    password
    name
    address
  }  
}
`;

export const LOGIN_USER = gql `
 mutation($email: String!, $password: String!) {
   signinUser(email: $email, password: $password) {
     token
   }
 }
`;