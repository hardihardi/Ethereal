import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of DeFi: Trends to Watch",
    excerpt: "Explore the emerging trends in Decentralized Finance and what they mean for the future of banking.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "NFTs Beyond Art: Exploring New Use Cases",
    excerpt:
      "Discover how NFTs are being used in industries beyond digital art, from real estate to supply chain management.",
    date: "2023-06-02",
  },
  {
    id: 3,
    title: "The Rise of DAOs: Decentralized Governance in Action",
    excerpt:
      "Learn about the growing importance of Decentralized Autonomous Organizations and their impact on traditional business models.",
    date: "2023-06-20",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Ethereal Blog
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Insights and updates from the world of Web3
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

