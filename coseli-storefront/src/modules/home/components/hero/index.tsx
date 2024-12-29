import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base  overflow-hidden">
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
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 sm:p-12 lg:p-24 gap-6 bg-black text-white bg-opacity-50">
        <h1
          className="text-5xl sm:text-7xl font-bold mb-4"
          style={{
            color: "white",
            textShadow: `
                  0 0 5px rgba(0, 0, 0, 0.2),
                  0 0 10px rgba(0, 0, 0, 0.3),
                  0 0 15px rgba(0, 0, 0, 0.4),
                  0 0 200px rgba(0, 0, 0, 0.5),
                  0 0 300px rgba(0, 0, 0, 0.6),
                  0 0 400px rgba(0, 0, 0, 0.7)
                `,
          }}
        >
          Exceptional Quality. Custom Fit.
        </h1>
        <p
          className="text-lg mb-6 sm:text-xl/8"
          style={{
            color: "white",
            textShadow: `
              0 0 50px rgba(0, 0, 0, 0.2),
              0 0 60px rgba(0, 0, 0, 0.3),
              0 0 70px rgba(0, 0, 0, 0.4),
              0 0 80px rgba(0, 0, 0, 0.5),
              0 0 25px rgba(0, 0, 0, 0.6),
              0 0 100px rgba(0, 0, 0, 0.7)
            `,
          }}
        >
          Handcrafted Boots for Every Journey
        </p>
        <div className="flex justify-center space-x-4 text-center">
          {/* <Link
            href="/store"
            className="px-6 py-3 bg-white text-black rounded font-semibold flex items-center gap-4 hover:bg-gray-200 transition"
          >
            Shop now  {" "}
          </Link> */}
          <Link
            href="/store"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
