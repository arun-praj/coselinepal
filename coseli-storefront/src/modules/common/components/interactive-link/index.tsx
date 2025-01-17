import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"
import { myFont } from "app/layout"
import { clx } from "@medusajs/ui"
type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className={clx("flex gap-x-1 items-center group", myFont.className)}
      href={href}
      onClick={onClick}
      {...props}
    >
      {/* <Text className="text-ui-fg-interactive">{children}</Text> */}
      <Text className={myFont.className}>{children}</Text>
      {/* <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        // color="var(--fg-interactive)"
      /> */}
    </LocalizedClientLink>
  )
}

export default InteractiveLink
