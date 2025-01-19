import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-3 flex items-center font-[myfont]">
        <Heading className="text-[2rem] leading-[2.75rem] font-[myfont]">
          Cart
        </Heading>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-8 w-full lg:hidden ">
        {items
          ? items
              .sort((a, b) => {
                return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
              })
              .map((item) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    type="mobile"
                    currencyCode={cart?.currency_code}
                  />
                )
              })
          : repeat(5).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
      </div>
      <Table className="hidden lg:block">
        <Table.Header className="border-t-0 font-[myfont]">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus font-[myfont]">
            <Table.HeaderCell className="!pl-0 font-[myfont]">
              Item
            </Table.HeaderCell>
            <Table.HeaderCell className=""></Table.HeaderCell>
            <Table.HeaderCell className="font-[myfont]">
              Quantity
            </Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell font-[myfont]">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right font-[myfont]">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      type="full"
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
