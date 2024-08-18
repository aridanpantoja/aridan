export async function fetchHygraph(query: string) {
  try {
    const response = await fetch(process.env.HYGRAPH_URL as string, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({ query }),
      cache: 'no-store',
    })

    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}
