async function fetchFunction(body, token) {
  const GRAPHQL_LINK = `${process.env.REACT_APP_GRAPHQL_LINK}`
  try {
    const fetching = await fetch(GRAPHQL_LINK, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    
    const res = await fetching

    if (res.status !== 200 && res.status !== 201) {
      throw new Error("Failed!")
    }
    return await res.json()
  } catch (err) {
    console.log(err)
  }

}

export default fetchFunction

