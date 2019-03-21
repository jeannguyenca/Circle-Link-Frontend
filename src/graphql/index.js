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

export const STORE_INFO = gql `
  query {
    stores (option: "mystore") {
      _id
      storename
      creator {
      email
    }
  }
}`;

export const STORE_OWNER = gql `
  query {
    coupons (storeId: $storeId, couponId: $couponId, option: "collab") {
      _id
      name
      store {
        storename
    }
  }
}`;






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

export const CREATE_STORE = gql `
  mutation ($storname: String!, $address: String!){
    createStore(storeInput: { storename: $storename, address: $address }) {
      _id
      storename
      address
      name
    }
  }
`;

export const CREATE_COUPON = gql `
  mutation (
    $name: String!, $details: String!, $condition: String!, $startDay: String, $expiredDay:String, $description: String, $type: String, $condition: int!, $amount: int, 
    $storeId: ID!, $collabStoreID: ID!
  ){
  createCoupon(couponInput: { 
    name: $name , details: $details, condition: $condition, startDay: $startDay, expiredDay: $expiredDay, status: $status,
    description: $description, type: $type, 
    condition: $condition, amount: $amount 
    }, 
    storeId: $storeID, collabId: $collabStoreID)
  {
    _id
    name
    details
    condition
    startDay
    description
    type
    condition
    amount
    storeId
    collabId

  }
}
`;

export const EDIT_COUPON = gql `
  mutation( $details: String!, $condition: String!, $startDay: String, 
            $expiredDay:String, $description: String, $type: String, $condition: int!, $amount: int, $storeId: ID!, $collabStoreID: ID!) {
     editCoupon(
       couponEditInput:{
          details: $details, condition: $condition, startDay: $startDay, 
          expiredDay: $expiredDay, status: $status,
          description: $description, type: $type,
          condition: $condition, amount: $amount
       }, couponId: $couponID) {
      _id
      details
      condition
      startDay
      description
      type
      condition
      amount
      storeId
      collabId
    }
  } 
`;

export const CANCEL_COUPON = gql `
  mutation($couponID: ID!) {
     cancelCoupon(couponId: $couponID) {
      _id
    }
  } 
`;
export const DELETE_COUPON = gql `
  mutation($couponID: ID!) {
     deleteCoupon(couponId: $couponID) {
      _id
    }
  } 
`;

