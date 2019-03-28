//login
`query {
    login(email: ${email}, password: ${password}){
      userId
      role
      token
      tokenExpiration
    }
  }`
  
  //create user
  //password - not encrypted
  //name and address is optional
  //for normal user: don't put role
  //for store user: user "store"
  `mutation {
    createUser(userInput: {
      email: ${email}, password: ${password}, name: ${name}, address: ${address}
    }, role: "store"){
      _id
      email
      password
      name
      address
      role
    }
  }
  `
  
  //create store
  //user needs to sign in as a store user to be able to create a store. For now, we don't have create a store feature, a logged in store owner will access one store immidiately
  
  `mutation {
    createStore(storeInput: { storename: ${storename}, address: ${address} }) {
      _id
      storename
      address
    }
  }`
  
  // view stores 
  // for regular user don't use option
  // for store owner: use option "mystore" to see their store
  `query {
    stores (option: "mystore") {
      _id
      storename
      creator {
        email
      }
    }
  }`
  
  //create coupon
  //user needs to sign in as a store user to be able to create a coupon. Use bearer token as header to gain access to the backend
  
  // name: String!
  // description: String
  // type: String
  // details: String!
  // condition: Int!
  // startDay: String! 
  // User "2019-02-20T04:16:27.942Z" new Date(date).toISOString()
  // expiredDay: String
  // amount: Int
  
  // storeId is required
  // collabId is required for collab coupon
  
  `mutation {
    createCoupon(couponInput: {name: ${name}, details: ${details}, condition: ${condition}, startDay: ${startDate}}, storeId: ${endDate}} storeId: ${storeID}, collabId: ${collabStoreID})
    {
    _id
    }
  }`
  
  // cancel coupon
  // only approved coupon can be cancelled
  `mutation {
    cancelCoupon(couponId: ${couponID}) {
      _id
    }
  }`
  
  // delete coupon
  // completely delete coupon from the database
  // return store object
    `mutation {
      deleteCoupon(couponId: ${couponID}) {
      _id
    }
  }`
  
  // view coupon
  // query for all user
  `query {
    coupons {
      _id
      name
      store {
        storename
      }
    }
  }`
  // query for store owner
  // storeId: find coupon of the store (not the collab one)
  // couponId: find coupon by id
  // option: "collab" - find collab coupon
  `query {
    coupons (storeId: ${storeId}, couponId: ${couponId}, option: "collab") {
      _id
      name
      store {
        storename
      }
    }
  }`
  
  //TODO: - view one coupon by id
  //      - from pending to approve coupon
  
  
  
  
  
  
  
  