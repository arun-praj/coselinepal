"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

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
    <div className="flex small:flex-col gap-12 small:px-0 pl-6  small:ml-[1.675rem]">
      <SortProducts
        sortBy={sortBy}
        setQueryParams={setQueryParams}
        data-testid={dataTestId}
      />
    </div>
  )
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-semibold text-xs uppercase tracking-widest",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center font-bold",
    indicator: "text-medium font-bold",
    content: "text-small px-2",
  }
  return (
    <div className="w-[300px] pr-6 ">
      <Accordion
        selectionMode="multiple"
        itemClasses={itemClasses}
        defaultExpandedKeys={["1", "2"]}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Collection"
          style={{
            fontSize: "12px",
          }}
          className=" cursor-pointer text-xs"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Filters">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default RefinementList
