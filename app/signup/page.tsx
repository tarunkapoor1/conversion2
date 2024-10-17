"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">How does Profit Margin work?</h1>
        <p className="text-xl mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Attribution Diagram Placeholder</p>
        </div>
      </div>
      <Card className="w-full md:w-1/2 max-w-md">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="Enter email address" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon className="h-4 w-4 text-gray-400" /> : <EyeIcon className="h-4 w-4 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to profit margin Terms of Service and Privacy Policy.
                </label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full mb-4">Sign Up</Button>
          <p className="text-sm text-center mb-4">or continue with</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              G
            </Button>
            <Button variant="outline" size="icon">
              F
            </Button>
            <Button variant="outline" size="icon">
              A
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}