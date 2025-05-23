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
    // <div className="w-full bg-[url('/bg1.png')]">
    <div>
      <div className="w-full content-container ">
        {/* Header Section */}
        <div
          className="bg-cover bg-center"
        // style={{ backgroundImage: 'url("/placeholder-image.jpg")' }}
        >
          {/* <div className="flex flex-col items-start justify-center h-[30vh] px-12 text-black bg-[url('/bg2.png')]"> */}
          <div className="flex flex-col items-center justify-center h-[30vh]  text-black">
            <h1 className="text-4xl font-bold">
              ABOUT US            </h1>
            <p className="text-gray-600 mt-4">
              Welcome to our home—where passion, tradition, and love for craft come together to create something special. For the past 32 years, we’ve been handcrafting leather shoes with care, focusing on comfort, durability, and the joy that comes with wearing something made just for you. Our journey is one of family, community, and a deep commitment to the people and the planet around us.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
          <div className=" flex flex-col  justify-center text-left">
            <h2 className="text-2xl font-bold">
              Our Heritage: A Family Tradition of Crafting Leather Shoes for 32 Years
            </h2>
            <p className="text-gray-600 mt-2">
              What started as a humble workshop has grown into something much more than a business—it’s a family tradition. For over three decades, we’ve been perfecting the art of crafting leather shoes, always with one thing in mind: making shoes that feel like they were made just for you.
              Each pair we create carries the essence of our journey. Our team of artisans has been with us for many years, and they take great pride in their work—stitching, shaping, and refining every detail with love and care. It’s not just about making shoes; it’s about creating something that lasts, something that tells a story and becomes part of your life. When you slip into a pair of our shoes, you’re not just wearing a product—you’re wearing a piece of our heart.

            </p>
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src={"/black.jpg"}
              alt="Shoes"
              fill={true}
              className=" aspect-square pointer-events-none	"
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
            <div className=" flex flex-col  justify-center text-left">
              <h2 className="text-2xl font-bold mb-4">Empowering Women: Giving Jobs, Building Futures
              </h2>

              <p className="text-gray-600">
                For us, business is about more than just shoes; it’s about making a real difference in the lives of the people who work with us. We believe in creating job opportunities that provide more than just a paycheck—they offer dignity, independence, and a chance for women to flourish.
                Over the years, we’ve had the honor of creating many job opportunities for women, especially those who need it most. By offering fair wages, a safe working environment, and the chance to learn and grow, we’ve helped women build careers that empower them and their families. Many of our talented artisans have been with us for years, and together, we’ve created a workplace that feels like a family—a place where everyone supports one another, and everyone has a voice.

              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="px-4 py-4 bg-opacity-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" flex flex-col  justify-center text-left">
              <h2 className="text-2xl font-bold mb-4">Sustainability: Crafting with Care for a Greener Tomorrow
              </h2>

              <p className="text-gray-600">
                We’ve always believed that the best things in life are the ones that last. That’s why sustainability is at the heart of everything we do. From the leathers we choose to the way we run our factory, we’re committed to doing things the right way—caring for the earth while we create something beautiful and lasting.
                We work closely with suppliers who share our commitment to sustainable practices. Our leathers are sourced responsibly, and we take extra steps to ensure every piece is made with the least impact on the planet. It’s not just about making shoes that last; it’s about making shoes that leave a positive mark on the world.

                Thank you for being part of our story. Each pair of shoes we make is a part of a larger journey—one filled with love, care, and a dedication to making the world a better place, one step at a time.

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
            <div className=" flex flex-col  justify-center text-left">
              <h2 className="text-2xl font-bold mb-4">Coseli story</h2>

              <p className="text-gray-600">
                At Coseli, we don’t just make shoes; we craft stories of resilience, quality, and sustainability. As a family-run business, we take pride in offering premium, handcrafted footwear made from recycled leather, ensuring comfort, durability, and a positive impact. Whether you're a retailer, designer, or corporate client, we bring your vision to life with ethical craftsmanship and personalized service. Partner with us and step into a future of style, sustainability, and trust.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
      </div>
      <div className="bg-black text-white px-12 py-28 mt-10 text-center flex items-center flex-col">
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
