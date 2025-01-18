import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
export const ProductCollection = async ({ setQueryParams }: any) => {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  const handleChange = (value: any) => {
    setQueryParams("sortBy", value)
  }
  return (
    <>
      {collections.map((item) => {
        return <p>{item.title}</p>
      })}
    </>
  )
}
