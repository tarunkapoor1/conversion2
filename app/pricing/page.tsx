"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CheckCircle2 } from 'lucide-react'

const features = [
  "Unlimited projects",
  "Advanced analytics",
  "24/7 customer support",
  "API access",
  "Custom integrations",
  "Team collaboration tools"
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const monthlyPrice = 29
  const annualPrice = 19
  const annualSavings = (monthlyPrice - annualPrice) * 12

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, transparent pricing</h1>
      <p className="text-xl text-center text-muted-foreground mb-8">
        Choose the plan that's right for your business
      </p>
      
      <div className="mb-12">
        <Image
          src="/dashboard-preview.png"
          alt="Dashboard Preview"
          width={1200}
          height={675}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-center items-center space-x-4 mb-12">
        <span className={`text-sm ${!isAnnual ? 'font-semibold' : ''}`}>Monthly</span>
        <Switch
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <span className={`text-sm ${isAnnual ? 'font-semibold' : ''}`}>
          Annually <span className="text-green-500 font-semibold">(Save ${annualSavings}/year)</span>
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: "Monthly", price: monthlyPrice, period: "month" },
          { name: "Annual", price: annualPrice, period: "month, billed annually", highlight: true }
        ].map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.highlight ? 'border-primary shadow-lg' : ''}`}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {plan.name}
                {plan.highlight && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Best Value
                  </span>
                )}
              </CardTitle>
              <CardDescription>{plan.highlight ? "Perfect for growing businesses" : "Great for getting started"}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-4">
                ${isAnnual ? plan.price : monthlyPrice}
                <span className="text-base font-normal text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                Get started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}