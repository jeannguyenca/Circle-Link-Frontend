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

export const createCollabCoupon = (name, description, details, condition, startDate, storeID, collabId) => {
  return {
    query: `
            mutation {
                createCoupon(couponInput: {name: "${name}", description: "${description}", details: "${details}", condition: ${condition}, startDay: "${startDate}"}, storeId: "${storeID}", collabId: "${collabId}")
                {
                _id
                }
            }
        `
  }
}
  
  
  export default createCoupon