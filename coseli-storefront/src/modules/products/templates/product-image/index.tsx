"use client"

import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

import ImageThumbnail from "@modules/products/components/image-thumbnail"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct | null | any
}
function ProductImage({ product }: ProductTemplateProps) {
  const [seletedImage, setSelectedImage] = useState(product?.images[0] || "")
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })
  const onThumbClick = useCallback(
    (index: any) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )
  return (
    <>
      <div className="hidden lg:block w-[10%] relative ">
        <ImageThumbnail
          images={product?.images || []}
          setSelectedImage={setSelectedImage}
          selectedImage={seletedImage}
          layout="vertical"
          ref={emblaThumbsRef}
          onclick=""
        />
      </div>

      <div className="relative block w-full small:mx-5  aspect-square ">
        {seletedImage?.url && seletedImage?.id && (
          <Image
            src={seletedImage?.url}
            alt={seletedImage?.id}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 720px"
            style={{
              objectFit: "cover",
            }}
          />
        )}

        {/* <ImageGallery images={seletedImage || []} /> */}
      </div>
      <div className="block lg:hidden w-full mt-4 overflow-x-hidden ">
        <ImageThumbnail
          images={product?.images || []}
          setSelectedImage={setSelectedImage}
          selectedImage={seletedImage}
          layout="horizontal"
          ref={emblaThumbsRef}
          onclick={onThumbClick}
        />
      </div>
    </>
  )
}

export default ProductImage
