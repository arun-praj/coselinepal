import { deleteLineItem } from "@lib/data/cart"
import { Spinner, Trash } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useState } from "react"
import { text } from "stream/consumers"

const DeleteButton = ({
  id,
  children,
  className,
  text,
}: {
  id: string
  children?: React.ReactNode
  className?: string
  text?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }
  const textVal: any = text === "remove" ? text : <Trash />

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="flex gap-x-1 text-ui-fg-subtle underline capitalize hover:text-ui-fg-base cursor-pointer"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? <Spinner className="animate-spin" /> : textVal}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
