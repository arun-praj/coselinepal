import { Metadata } from "next"

// import { SortOptions } from "@modules/about/components/refinement-list/sort-products"
// import AboutTemplate from "@modules/about/templates"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default async function AboutPage() {
  return (
    // <AboutTemplate/>
    // <div className="font-sans text-gray-800">
    //   {/* Hero Section */}
    //   <section
    //     className="relative bg-cover bg-center h-screen text-white"
    //     style={{ backgroundImage: 'url("/path-to-your-hero-image.jpg")' }}
    //   >
    //     <div className="absolute inset-0 bg-black opacity-50"></div>
    //     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    //       <h1 className="text-5xl font-bold mb-4">
    //         Our Philosophy Is Simple. You Deserve It All.
    //       </h1>
    //       <div className="flex space-x-4 mt-4">
    //         <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200">
    //           Our Story
    //         </button>
    //         <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200">
    //           Our Products
    //         </button>
    //         <button className="px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200">
    //           Our Values
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Content Sections */}
    //   <section className="max-w-5xl mx-auto py-16 px-4 text-center">
    //     <h2 className="text-3xl font-semibold mb-6">
    //       Comfort, Durability, Versatility & Honest Pricing.
    //     </h2>
    //     <p className="text-lg text-gray-600">
    //       At Coseli Footwear, we design boots that embody quality, comfort, and
    //       style.
    //     </p>
    //   </section>

    //   {/* Section with Image and Text */}
    //   <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center py-16 px-4">
    //     <img
    //       src="/path-to-quality-image.jpg"
    //       alt="Quality"
    //       className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
    //     />
    //     <div className="md:w-1/2">
    //       <h3 className="text-2xl font-semibold mb-4">Commitment to Quality</h3>
    //       <p className="text-lg text-gray-600">
    //         We source the best materials for each pair of boots we create.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center py-16 px-4">
    //     <img
    //       src="/path-to-partner-image.jpg"
    //       alt="Partners"
    //       className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
    //     />
    //     <div className="md:w-1/2">
    //       <h3 className="text-2xl font-semibold mb-4">World-Class Partners</h3>
    //       <p className="text-lg text-gray-600">
    //         Our boots are crafted with care, partnering with skilled artisans.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center py-16 px-4">
    //     <img
    //       src="/path-to-experience-image.jpg"
    //       alt="Experience"
    //       className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
    //     />
    //     <div className="md:w-1/2">
    //       <h3 className="text-2xl font-semibold mb-4">A Better Experience</h3>
    //       <p className="text-lg text-gray-600">
    //         Our customer-centric approach ensures your satisfaction at every
    //         step.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center py-16 px-4">
    //     <img
    //       src="/path-to-day-image.jpg"
    //       alt="For the Day"
    //       className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
    //     />
    //     <div className="md:w-1/2">
    //       <h3 className="text-2xl font-semibold mb-4">
    //         For Wherever the Day Takes You
    //       </h3>
    //       <p className="text-lg text-gray-600">
    //         Whether it's a casual day or an adventure, our boots have you
    //         covered.
    //       </p>
    //     </div>
    //   </section>

    //   {/* Team Section */}
    //   <section className="max-w-5xl mx-auto text-center py-16 px-4">
    //     <h2 className="text-3xl font-semibold mb-6">Our Growing Team</h2>
    //     <p className="text-lg text-gray-600 mb-8">
    //       At Coseli Footwear, our team is passionate about bringing you the
    //       finest boots...
    //     </p>
    //     <img
    //       src="/path-to-team-image.jpg"
    //       alt="Our Team"
    //       className="w-full rounded-lg shadow-lg"
    //     />
    //   </section>

    //   {/* Footer Section */}
    //   <footer className="bg-gray-900 text-white py-8 px-4">
    //     <div className="max-w-5xl mx-auto text-center">
    //       <p className="text-lg">Have A Question?</p>
    //       <p className="text-gray-400">
    //         No problem! We’re always here to help. Just chat or email for
    //         assistance.
    //       </p>
    //       <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200">
    //         FAQ
    //       </button>
    //     </div>
    //   </footer>
    // </div>
    <div className="w-full bg-[url('/bg1.png')]">
      {/* Header Section */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url("/placeholder-image.jpg")' }}
      >
        <div className="flex flex-col items-start justify-center h-[30vh] px-12 text-black bg-[url('/bg2.png')]">
          <h1 className="text-4xl font-bold">
            Our Philosophy Is Simple. You Deserve It All.
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
        <div className=" flex flex-col  justify-center text-center">
          <h2 className="text-2xl font-bold">
            Comfort, Durability, Versatility & Honest Pricing.
          </h2>
          <p className="text-gray-600 mt-2">
            Comfort, durability, versatility, and honest pricing are the core
            values that drive our brand. We strive to provide our customers with
            premium quality products that can withstand the rigors of everyday
            life.
          </p>
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src={"/black.jpg"}
            alt="Shoes"
            fill={true}
            className=" aspect-square"
          />
        </div>
      </div>

      {/* Quality Commitment Section */}
      <div className="bg-gray-50 bg-opacity-60 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
          <div className="flex flex-col relative items-center justify-center h-[500px]">
            <video
              autoPlay
              playsInline
              loop
              muted
              src={"/factory.webm"}
              className="h-full w-full absolute z-9 aspect-square"
              style={{ objectFit: "cover" }}
            ></video>
          </div>
          <div className=" flex flex-col  justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">Commitment to Quality</h2>

            <p className="text-gray-600">
              We are dedicated to providing our customers with the highest
              quality products. Our team works tirelessly to ensure that every
              pair of shoes meets our stringent standards for durability,
              comfort, and style.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-12 py-8 bg-opacity-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" flex flex-col  justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">World-Class Partners</h2>

            <p className="text-gray-600">
              We have carefully selected our partners to ensure that they share
              our commitment to quality and customer satisfaction. Together, we
              work to deliver the best possible products and services to our
              customers.
            </p>
          </div>
          <div className="flex flex-col relative items-center justify-center h-[500px]">
            <video
              autoPlay
              playsInline
              loop
              muted
              src={"/coming_soon.webm"}
              className="h-full w-full absolute z-9 aspect-square"
              style={{ objectFit: "cover" }}
            ></video>
          </div>
        </div>
      </div>

      {/* Better Experience Section */}
      <div className=" px-12 py-8 bg-opacity-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col relative items-center justify-center h-[500px]">
            <video
              autoPlay
              playsInline
              loop
              muted
              src={"/hero.webm"}
              className="h-full w-full absolute z-9 aspect-square"
              style={{ objectFit: "cover" }}
            ></video>
          </div>
          <div className=" flex flex-col  justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">A Better Experience</h2>

            <p className="text-gray-600">
              We are committed to providing our customers with a better
              experience, from the moment they step into our store to the day
              they receive their order. Our team is dedicated to ensuring that
              every interaction is seamless and satisfying.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white px-12 py-20 text-center flex items-center flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center  max-w-md">
          For Wherever The Day Takes You
        </h2>
        <div className="flex text-center  max-w-md">
          <div>
            <p className="text-gray-400">
              Our shoes are designed to be versatile and durable, so you can
              wear them from the city streets to the hiking trails. No matter
              where your day takes you, we have the perfect pair of shoes to
              keep you comfortable and confident.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
