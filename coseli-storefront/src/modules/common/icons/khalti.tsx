import React from "react"

import { IconProps } from "types/icon"
import Image from "next/image"

const Khalti: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return <Image src={"/khalti.jpg"} alt="khalti icon" height={50} width={50} />
}

export default Khalti
