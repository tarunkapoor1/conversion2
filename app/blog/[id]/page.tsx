import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Marketing Attribution",
    content: "Marketing attribution is the process of identifying which marketing efforts are contributing to sales or conversions. It's crucial for businesses because it helps them understand which channels and campaigns are most effective, allowing for better allocation of marketing budgets and improved ROI. There are various attribution models, including first-touch, last-touch, and multi-touch attribution, each with its own strengths and use cases.",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Top 5 Marketing Attribution Models",
    content: "1. First Touch Attribution: Credits the first touchpoint in the customer journey. 2. Last Touch Attribution: Credits the final touchpoint before conversion. 3. Linear Attribution: Distributes credit equally across all touchpoints. 4. Time Decay Attribution: Gives more credit to touchpoints closer to the conversion. 5. Position-Based Attribution: Typically gives 40% credit to first and last touches, with the remaining 20% distributed among middle touchpoints. Choosing the right model depends on your business goals, sales cycle length, and the complexity of your marketing efforts.",
    date: "2023-06-15",
  },
  {
    id: 3,
    title: "Maximizing ROI with Multi-Touch Attribution",
    content: "Multi-touch attribution is a powerful approach that considers all touchpoints in the customer journey. By implementing multi-touch attribution, businesses can gain a more comprehensive understanding of their marketing effectiveness. This allows for more accurate budget allocation, improved campaign optimization, and ultimately, a higher ROI. Key benefits include identifying undervalued channels, understanding the customer journey, and making data-driven decisions for future marketing strategies.",
    date: "2023-07-01",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}