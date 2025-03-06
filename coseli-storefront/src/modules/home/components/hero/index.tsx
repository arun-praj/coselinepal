import Link from "next/link"
import { myFont, oswald } from "app/layout"
import { clx } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] w-full border-b border-ui-border-base  overflow-hidden">
      <video
        autoPlay
        playsInline
        loop
        muted
        src={"/hero.webm"}
        className="h-full w-full absolute z-9"
        style={{ objectFit: "cover" }}
      ></video>

      {/* Background Video */}
      {/* {isClient && (
        <div className="absolute inset-0">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RUW6X_J_c_0" // Replace with your YouTube URL
            playing
            muted
            loop
            controls={false}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
          />
        </div>
      )} */}

      {/* Content Overlay */}
      <div className={
        clx("absolute inset-0 z-10  oswald flex flex-col justify-center items-center md:items-start text-center p-6 sm:p-12 lg:p-24 gap-6 bg-black text-white bg-opacity-50",oswald.className)}>
        <h1
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{
            color: "white",
            textShadow: `
                0 0 50px rgba(0, 0, 0, 0.1),
                0 0 60px rgba(0, 0, 0, 0.1),
                0 0 70px rgba(0, 0, 0, 0.1),
                0 0 80px rgba(0, 0, 0, 0.1),
                0 0 25px rgba(0, 0, 0, 0.1),
                0 0 100px rgba(0, 0, 0, 0.1)
                `,
          }}
        >
          Exceptional Quality.
          <br />
          Custom Fit.
          <p
            className="text-lg mt-6 mb-2  font-normal sm:text-xl/8"
            style={{
              color: "white",
              textShadow: `
              0 0 50px rgba(0, 0, 0, 0.1),
              0 0 60px rgba(0, 0, 0, 0.1),
              0 0 70px rgba(0, 0, 0, 0.1),
              0 0 80px rgba(0, 0, 0, 0.1),
              0 0 25px rgba(0, 0, 0, 0.1),
              0 0 100px rgba(0, 0, 0, 0.1)
            `,
            }}
          >
            Handcrafted Boots for Every Journey
          </p>
          <div className="text-center">
            {/* <Link
            href="/store"
            className="px-6 py-3 bg-white text-black rounded font-semibold flex items-center gap-4 hover:bg-gray-200 transition"
          >
            Shop now  {" "}
          </Link> */}
            <Link
              href="/store"
              className="rounded-sm bg-white  px-6 py-[14px] text-base font-normal md:min-w-[170px] w-[170px] text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
            >
              Shop now
            </Link>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Hero
