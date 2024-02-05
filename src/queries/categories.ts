import { fetchHygraph } from '@/lib/fetch-hygraph'
import { CategoryProps } from '@/types/category'

const query = `query Categories {
    categories {
      categoryId
      categoryLabel
      categoryDescription
    }
  }
`

export interface getCategoriesProps {
  categories: CategoryProps[]
}

export async function getCategories(): Promise<getCategoriesProps> {
  return fetchHygraph(query)
}
