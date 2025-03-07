"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import React from "react"
import { clx } from "@medusajs/ui"
import { myFont } from "app/layout"

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {
  const { countryCode } = useParams()
  const pathname = usePathname()
  return (
    <>
      {pathname === `/${countryCode}${href}` ? (
        <Link
          href={`/${countryCode}${href}`}
          {...props}
          className={clx(props.className, " font-semibold", props.className)}
        >
          {children}
        </Link>
      ) : (
        <Link
          href={`/${countryCode}${href}`}
          {...props}
          className={props.className}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default LocalizedClientLink
