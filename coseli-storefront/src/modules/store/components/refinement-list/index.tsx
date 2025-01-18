"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
// import { getCategoryByHandle, listCategories } from "@lib/data/categories"

import SortProducts, { SortOptions } from "./sort-products"
import Link from "next/link"
import { clx } from "@medusajs/ui"
// import ProductCollection from "./product-collection"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  categories?: any
  collections?: any
  mobile?: boolean
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  categories,
  collections,
  mobile = false,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }
  const defaultContent = (
    <div className="flex small:flex-col gap-12 small:px-0">
      <SortProducts
        sortBy={sortBy}
        setQueryParams={setQueryParams}
        data-testid={dataTestId}
      />
    </div>
  )
  const itemClasses = {
    base: "py-0 w-full px-0",
    title: "font-semibold text-xs uppercase tracking-widest px-0",
    trigger:
      "data-[hover=true]:bg-default-0 rounded-lg pt-3 pb-1 flex items-center font-bold",
    indicator: "text-medium font-bold",
    content: "text-small px-0",
  }

  const secondItemClass = {
    base: "py-0 w-full px-0",
    title: " font-normal text-xs tracking-widest px-0",
    trigger:
      "data-[hover=true]:bg-default-0 rounded-lg pt-3 pb-1 flex items-center font-bold",
    indicator: "text-medium font-bold",
    content: "text-small px-0",
  }

  return (
    <div
      className={clx("w-[250px] ", {
        "w-full": mobile,
        "pr-6": mobile == false,
      })}
    >
      <Accordion
        selectionMode="multiple"
        itemClasses={itemClasses}
        className="px-0"
        defaultExpandedKeys={["1", "2"]}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Collection"
          style={{
            fontSize: "12px",
          }}
          className=" cursor-pointer text-xs py-0"
        >
          <div className=" flex flex-col mb-2">
            {collections?.map((collection: any) => {
              return (
                <Link
                  href={`/collections/${collection.handle}?${searchParams}`}
                  key={collection.id}
                  className={clx(
                    "pt-[3px] text-[#6E6E6E] text-[13px]",

                    {
                      "text-black":
                        pathname == `/np/collections/${collection.handle}`,
                    }
                  )}
                >
                  {collection.title}
                </Link>
              )
            })}
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Filters">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default RefinementList
