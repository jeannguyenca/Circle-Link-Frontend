const createCoupon = (
  name,
  description,
  details,
  condition,
  startDate,
  endDate,
  storeID
) => {
  return {
    query: `
            mutation {
                createCoupon(couponInput: {name: "${name}", description: "${description}", details: "${details}", condition: ${condition}, startDay: "${startDate}", expiredDay: "${endDate}"}, storeId: "${storeID}")
                {
                _id
                }
            }
        `
  }
}

export const createCollabCoupon = (
  name,
  description,
  details,
  condition,
  startDate,
  endDate, 
  storeID,
  collabId
) => {
  return {
    query: `
            mutation {
                createCoupon(couponInput: {name: "${name}", description: "${description}", details: "${details}", condition: ${condition}, startDay: "${startDate}", expiredDay: "${endDate}"}, storeId: "${storeID}", collabId: "${collabId}")
                {
                _id
                }
            }
        `
  }
}

export default createCoupon
