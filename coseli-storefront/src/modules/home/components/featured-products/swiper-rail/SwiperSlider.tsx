"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"
import ProductPreview from "@modules/products/components/product-preview"
import Thumbnail from '@modules/products/components/thumbnail';
export default function SwiperSlider({ pricedProducts, region }: {
  pricedProducts: any,
  region: any
}) {
  console.log(pricedProducts);

  return <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    breakpoints={{
      200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }}
  >
    {pricedProducts &&
      pricedProducts.map((product: any) => (
        <SwiperSlide key={product.id}>
          <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="square"
          // isFeatured={isFeatured}
        />
        </SwiperSlide>
        // <li key={product.id}>
        //   <SwiperSlide>
        //     {/* <ProductPreview product={product} region={region} isFeatured /> */}
        //   </SwiperSlide>
        // </li>
      ))}
  </Swiper>
}