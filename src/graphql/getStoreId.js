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

export default getStoreId
