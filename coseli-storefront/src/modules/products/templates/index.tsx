import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ImageThumbnail from "@modules/products/components/image-thumbnail"

import ProductImage from "./product-image"

import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        {/* <div className="flex flex-col small:hidden small:top-2 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div> */}

        <ProductImage product={product} />
        {/* <div className=" block w-[10%] relative ">
          <ImageThumbnail images={product?.images || []} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div> */}
        <div className="flex flex-col  small:top-2 small:py-0 small:max-w-[35%] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <div className=" small:flex small:flex-col  small:top-2 small:py-0 w-full py-8 gap-y-6">
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-16"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
