import { Suspense } from "react"
import Image from "next/image"
import { listRegions } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import { clx } from "@medusajs/ui"

import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const productCategories = await listCategories()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20  mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src={"/logo.png"}
                alt={"Website logo"}
                height={"80"}
                width={"120"}
              />
            </LocalizedClientLink>
          </div>

          {/* Category */}
          <div className="hidden md:flex flex-1 basis-0 justify-center items-center">
            {productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <ul
                  className="grid grid-cols-4 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-4 text-ui-fg-subtle txt-small lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base ",
                            children &&
                              " md:px-6 py-2 items-center text-gray-900 hover:text-gray-950 text-md mt-4"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-4 ml-3 gap-3">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-x-10 h-full  basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 23C1 17.477 5.477 13 11 13H13C18.523 13 23 17.477 23 23"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <div className=" basis-0 h-full items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
