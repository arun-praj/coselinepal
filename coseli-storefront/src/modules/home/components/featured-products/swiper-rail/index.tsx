import SwiperSlider from "./SwiperSlider"
import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"


export default async function SwiperRail({ region }: {
    region: HttpTypes.StoreRegion
}) {

    const {
        response: { products: pricedProducts },
    } = await listProducts({
        regionId: region.id,
        queryParams: {
            fields: "*variants.calculated_price",
            limit: 4,
        },
    })

    return <div className=" w-full">
        <SwiperSlider pricedProducts={pricedProducts} region={region} />
    </div>

}