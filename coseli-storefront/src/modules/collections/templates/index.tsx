import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { FilterDrawer } from "@modules/store/components/FilterDrawer"
export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"
  const { collections } = await listCollections({
    fields: "*products,*products.categories",
  })
  const productCategories = await listCategories({
    include_descendants_tree: true,
  })
  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <div className="hidden lg:block">
        <RefinementList
          sortBy={sort}
          data-testid="sort-by-container"
          collections={collections}
          categories={productCategories}
        />
      </div>

      <div className="block lg:hidden text-right">
        <FilterDrawer>
          <RefinementList
            sortBy={sort}
            data-testid="sort-by-container"
            collections={collections}
            categories={productCategories}
            mobile={true}
          />
        </FilterDrawer>
      </div>
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
