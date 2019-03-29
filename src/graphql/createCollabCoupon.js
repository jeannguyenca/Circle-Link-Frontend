const createCollabCoupon = (name, description, details, condition, startDate, storeID, collabID) => {
    return {
      query: `
            mutation {
                createCoupon(couponInput: {name: "${name}", description: "${description}", details: "${details}", condition: ${condition}, startDay: "${startDate}"}, storeId: "${storeID}", collabId: "${collabID}")
                {
                _id
                }
            }
        `
    }
  }
  
  
  export default createCollabCoupon