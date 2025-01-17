import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({
  price,
  font,
}: {
  price: VariantPrice
}) {
  if (!price) {
    return null
  }

  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className={clx("line-through text-ui-fg-muted", font.className)}
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx(
          "text-ui-fg-muted",
          {
            "text-ui-fg-interactive": price.price_type === "sale",
          },
          font.className
        )}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
