const getStoreId = () => {
  return {
    query: `
            query {
                stores (option: "mystore") {
                _id
                storename
                address
                creator {
                    name
                    email
                }
                }
            }
        `
  }
}

export const getStores = () => {
  return {
    query: `
      query {
        stores {
        _id
        storename
        address
      }
    }
    `
  }
}

export default getStoreId
