import { HttpTypes } from "@medusajs/types"
import { clx, Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  setSelectedImage: any
  selectedImage: any
  layout: string
  ref: any | null
  onclick: any
}

const ImageThumbnail = ({
  images,
  setSelectedImage,
  selectedImage,
  layout,
  ref,
  onclick,
}: ImageGalleryProps) => {
  return (
    <div className="" ref={ref}>
      <div
        className={clx("flex flex-col gap-y-4 gap-x-4 max-w-[100vw]", {
          "flex flex-row  ": layout === "horizontal",
        })}
      >
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className={clx(
                "relative  min-w-[75px] h-full aspect-square max-w-[75px] overflow-hidden bg-ui-bg-subtle cursor-pointer  hover:transition-transform hover:border-[2px]",
                {
                  "border-[1px] border-[#000000]":
                    selectedImage.id === image.id,
                }
              )}
              onClick={() => {
                setSelectedImage(image)
                onclick && onclick(selectedImage.id)
              }}
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 180px, 100px"
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageThumbnail
