import { clx, Text } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import { myFont } from "app/layout"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  // const { cheapestPrice } = getProductPrice({
  //   product,
  // })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className=" hover:scale-105 ease-linear"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="square"
          isFeatured={isFeatured}
        />
        <div
          className={clx(
            myFont.className,
            "flex flex-col lg:flex-row txt-compact-medium mt-4 justify-between"
          )}
        >
          <Text
            className={clx("text-ui-fg-subtle", myFont.className)}
            data-testid="product-title"
          >
            {product.title}
          </Text>
          {/* <div className={clx("flex items-center gap-x-2", myFont.className)}>
            {cheapestPrice && (
              <PreviewPrice price={cheapestPrice} font={myFont} />
            )}
          </div> */}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
