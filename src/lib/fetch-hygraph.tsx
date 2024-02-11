export const fetchHygraph = async (query: string) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60 * 5,
    },
  }

  // await new Promise((resolve) => setTimeout(resolve, 4000))
  const response = await fetch(process.env.HYGRAPH_URL as string, options)
  const { data } = await response.json()

  return data
}
