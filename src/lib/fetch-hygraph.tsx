import axios from 'axios'

const revalidateTime = 60 * 60

const axiosInstance = (query: string) =>
  axios.create({
    baseURL: process.env.HYGRAPH_URL as string,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    data: { query },
  })

export const fetchHygraph = async (query: string) => {
  try {
    const response = await axiosInstance(query).post('/')
    if (response.status === 200) {
      return {
        data: response.data,
        revalidate: revalidateTime,
      }
    } else {
      throw new Error(
        `Erro ao buscar dados: ${response.status} ${response.statusText}`,
      )
    }
  } catch (error) {
    return {
      data: null,
      error: 'Algo de errado aconteceu',
      revalidate: 60,
    }
  }
}
