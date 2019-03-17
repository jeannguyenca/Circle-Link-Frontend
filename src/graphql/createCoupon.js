const createCoupon = (name, description, details, condition, startDate, storeID) => {
    return {
      query: `
            mutation {
                createCoupon(couponInput: {name: "${name}", description: "${description}", details: "${details}", condition: ${condition}, startDay: "${startDate}"}, storeId: "${storeID}")
                {
                _id
                }
            }
        `
    }
  }
  
  
  export default createCoupon