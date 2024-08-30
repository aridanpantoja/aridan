import { HttpLink } from '@apollo/client'
import {
    ApolloClient,
    InMemoryCache,
    registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.HYGRAPH_URL as string,
      headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN as string}`,
      },
    })
  })
})
