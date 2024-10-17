"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Product A', sales: 4000, revenue: 2400 },
  { name: 'Product B', sales: 3000, revenue: 1398 },
  { name: 'Product C', sales: 2000, revenue: 9800 },
  { name: 'Product D', sales: 2780, revenue: 3908 },
  { name: 'Product E', sales: 1890, revenue: 4800 },
  { name: 'Product F', sales: 2390, revenue: 3800 },
]

export default function Reports() {
  const [reportType, setReportType] = useState('sales')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Select report type and date range</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Report</SelectItem>
                    <SelectItem value="conversion">Conversion Report</SelectItem>
                    <SelectItem value="traffic">Traffic Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DatePickerWithRange />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Generate Report</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{reportType === 'sales' ? 'Sales' : 'Revenue'} by Product</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={reportType === 'sales' ? 'sales' : 'revenue'} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}