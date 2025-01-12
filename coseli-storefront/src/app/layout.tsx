import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import localFont from "next/font/local"

export const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirNextLTPro-Regular.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../public/fonts/AvenirNextCyr-Demi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../public/fonts/AvenirNextLTPro-It.otf",
      weight: "700",
      style: "italic",
    },
  ],
})
export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={myFont.className}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
