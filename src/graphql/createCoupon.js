const createCoupon = (
  name,
  type,
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
                createCoupon(couponInput: {name: "${name}", description: "${description}", type: "${type}", details: "${details}", condition: ${condition}, startDay: "${startDate}", expiredDay: "${endDate}"}, storeId: "${storeID}")
                {
                _id
                }
            }
        `
  }
}

export const createCollabCoupon = (
  name,
  type,
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
                createCoupon(couponInput: {name: "${name}", description: "${description}", type: "${type}", details: "${details}", condition: ${condition}, startDay: "${startDate}", expiredDay: "${endDate}"}, storeId: "${storeID}", collabId: "${collabId}")
                {
                _id
                }
            }
        `
  }
}

export const viewCoupon = (storeID, option) => {
  return {
    query: `
      query {
        coupons (storeId: "${storeID}",  option: "${option}") {
          _id
          name
          description
          condition
          startDay
          expiredDay
          status
        }
      } 
        `
  }
}

export const deleteCoupon = couponId => {
  return {
    query: `
    mutation {
      deleteCoupon (couponId: "${couponId}") {
        _id
        storename
      }
    }
    `
  }
}

export default createCoupon
