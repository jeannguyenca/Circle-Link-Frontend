const getStoreId = () => {
    return {
      query: `
            query {
                stores (option: "mystore") {
                _id
                storename
                creator {
                    email
                }
                }
            }
        `
    }
  }
  
  export default getStoreId