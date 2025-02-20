import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Ethereal
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Pioneering the future of Web3 development
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              At Ethereal, we're committed to pushing the boundaries of Web3 technology. Our mission is to empower
              businesses and individuals with cutting-edge blockchain solutions that drive innovation and create new
              possibilities in the digital world.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">Our Expertise</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Smart Contracts",
              "DeFi Solutions",
              "NFT Platforms",
              "DAOs",
              "Cross-Chain Integration",
              "Web3 UX/UI",
            ].map((expertise) => (
              <div
                key={expertise}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{expertise}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

