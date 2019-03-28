const viewCoupon = (storeID) => {
    return {
      query: `
      {
        coupons (storeId: "${storeID}") {
          _id
          name
          store {
            storename
          }
        }
      }
      
      
        `
    }
  }

  export default viewCoupon

  