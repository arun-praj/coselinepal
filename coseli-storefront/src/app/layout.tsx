import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import "@mantine/core/styles.css"
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core"
import { Head } from "next/document"

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
    <html
      lang="en"
      data-mode="light"
      className={myFont.className}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <main className="relative">
          <MantineProvider>{props.children}</MantineProvider>
        </main>
      </body>
    </html>
  )
}
