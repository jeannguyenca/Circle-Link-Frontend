const getStoreId = () => {
    return {
      query: `
            query {
                stores (option: "mystore") {
                _id
                storename
                creator {
                    name
                    email
                }
                }
            }
        `
    }
  }
  
  export default getStoreId