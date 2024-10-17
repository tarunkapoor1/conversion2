import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Marketing Attribution",
    description: "Learn the basics of marketing attribution and why it's crucial for your business.",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Top 5 Marketing Attribution Models",
    description: "Explore the most popular attribution models and how to choose the right one for your campaigns.",
    date: "2023-06-15",
  },
  {
    id: 3,
    title: "Maximizing ROI with Multi-Touch Attribution",
    description: "Discover how multi-touch attribution can help you optimize your marketing spend and improve ROI.",
    date: "2023-07-01",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}