import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "DeFi Dashboard",
    image:
      "https://cdn.qwenlm.ai/output/a26f005f-384b-4e36-a939-94b8319e5605/t2i/a0b543d2-698c-49a0-9c3a-2986183ec289/8503e468-92cb-45c0-b8d6-20fedc0850cc.png",
    description: "A sleek and intuitive DeFi dashboard for managing crypto assets.",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    image:
      "https://cdn.qwenlm.ai/output/a26f005f-384b-4e36-a939-94b8319e5605/t2i/ba73cf73-dc39-4d49-8b6a-a2d32974e365/fa84a295-e345-4987-8ac5-5f5c66585cf1.png",
    description: "A vibrant marketplace for buying, selling, and trading unique digital assets.",
  },
  {
    id: 3,
    title: "DAO Governance Platform",
    image:
      "https://images.unsplash.com/photo-1609024849543-ff59df361d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "An innovative platform for decentralized decision-making and governance.",
  },
  {
    id: 4,
    title: "Cross-Chain Bridge",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    description: "A seamless bridge for transferring assets between different blockchain networks.",
  },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Project Gallery
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Showcasing our innovative Web3 solutions
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

