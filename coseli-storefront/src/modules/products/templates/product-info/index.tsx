import { HttpTypes } from "@medusajs/types"
import { clx, Heading, Text } from "@medusajs/ui"
import { myFont } from "app/layout"
type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-2 lg:max-w-[500px] mx-auto">
        <Heading
          level="h2"
          className={clx(
            "text-3xl leading-10 text-ui-fg-base ",
            myFont.className
          )}
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className={clx(
            myFont.className,

            "text-medium text-ui-fg-subtle whitespace-pre-line mb-2"
          )}
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
