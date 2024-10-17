import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Zap, Target } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Optimize Your Marketing with AI-Powered Precision</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Conversion.is helps you make data-driven decisions to maximize your marketing ROI.
          Track user behavior, improve conversion rates, and get AI-powered recommendations.
        </p>
        <Button asChild size="lg">
          <Link href="/signup" className="flex items-center">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <BarChart2 className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Analytics</h2>
          <p>Get deep insights into your marketing performance with interactive dashboards and custom reports.</p>
        </div>
        <div className="text-center">
          <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">A/B Testing</h2>
          <p>Optimize your campaigns with easy-to-setup A/B tests and AI-driven recommendations.</p>
        </div>
        <div className="text-center">
          <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">Audience Segmentation</h2>
          <p>Create and analyze targeted audience segments to improve your marketing effectiveness.</p>
        </div>
      </div>
      <div className="mt-16">
        <Image 
          src="/dashboard-preview.png" 
          alt="Conversion.is Dashboard Preview" 
          width={1200}
          height={675}
          className="rounded-lg shadow-2xl mx-auto"
        />
      </div>
    </div>
  )
}