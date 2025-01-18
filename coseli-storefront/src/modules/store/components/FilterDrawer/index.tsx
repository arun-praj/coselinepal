"use client"
import { Drawer, Button } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Adjustments } from "@medusajs/icons"

import { ReactNode } from "react"

export function FilterDrawer({ children }: { children: ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title="Filter">
        {/* Drawer content */}
        {children}
      </Drawer>

      <span onClick={open}>
        <div className=" outline-none lg:hidden flex justify-end items-center gap-2  cursor-pointer">
          Filter
          <div className="mt-[-4px]">
            <Adjustments />
          </div>
        </div>
      </span>
    </>
  )
}
