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
import LocalizedClientLink from "@modules/common/components/localized-client-link"

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
        id="breadfrumb-destop"
        className="hidden sm:block sm:content-container mt-3 "
      >
        <Breadcrumb product={product} />
      </div>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-2 relative"
        data-testid="product-container"
      >
        {/* <div className="flex flex-col small:hidden small:top-2 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div> */}
        <div
          id="breadcrumb-mobile"
          className="block sm:hidden sm:content-container "
        >
          <Breadcrumb product={product} />
        </div>
        <ProductImage product={product} />
        {/* {console.log(product)} */}

        {/* <div className=" block w-[10%] relative ">
          <ImageThumbnail images={product?.images || []} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div> */}
        <div className="flex flex-col  small:top-2 small:py-0 small:max-w-[35%] w-full py-0 gap-y-0">
          <ProductOnboardingCta />
          <div className=" small:flex small:flex-col  small:top-2 small:py-0 w-full py-6 gap-y-4 mb-4">
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

type BreadcrumbProps = {
  product: HttpTypes.StoreProduct
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ product }) => {
  return (
    <>
      {product.collection && (
        <div className="flex items-center pt-1 pb-3">
          <LocalizedClientLink
            href={`/store`}
            className="text-sm  text-[#a5a5a5] hover:text-ui-fg-subtle"
          >
            All
          </LocalizedClientLink>

          <span className=" px-1 text-sm text-[#a5a5a5]  text-ui-fg-muted ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a5a5a5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </span>
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-sm  text-[#a5a5a5] hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>

          <span className=" px-1 text-sm text-[#a5a5a5]  text-ui-fg-muted ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a5a5a5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </span>
          <LocalizedClientLink
            href={`/product/${product.handle}`}
            className="text-sm  text-[#a5a5a5] hover:text-ui-fg-subtle"
          >
            {product.title}
          </LocalizedClientLink>
        </div>
      )}
    </>
  )
}
