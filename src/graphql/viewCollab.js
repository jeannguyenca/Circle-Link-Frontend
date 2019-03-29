const viewCollab = (storeID) => {
    return {
        query: `
        {
          coupons (storeId: "${storeID}", option: "collab") {
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
  export default viewCollab

  