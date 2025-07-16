"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const budgetData = [
  {
    category: "Ingredients & Supplies",
    estimated: 2000000,
    actual: 0,
    remaining: 2000000,
    notes: "Flour, eggs, sugar, etc.",
    status: "Planned",
  },
  {
    category: "Basic Equipment",
    estimated: 4000000,
    actual: 0,
    remaining: 4000000,
    notes: "Oven, mixer, utensils",
    status: "Planned",
  },
  {
    category: "Renovation & Interior",
    estimated: 3000000,
    actual: 0,
    remaining: 3000000,
    notes: "Flooring, lighting, furniture",
    status: "Planned",
  },
  {
    category: "Marketing & Branding",
    estimated: 1500000,
    actual: 0,
    remaining: 1500000,
    notes: "Logo design, signage, website",
    status: "Planned",
  },
  {
    category: "Business License & Legal",
    estimated: 500000,
    actual: 0,
    remaining: 500000,
    notes: "Permits, registration fees",
    status: "Planned",
  },
  {
    category: "Initial Inventory",
    estimated: 1000000,
    actual: 0,
    remaining: 1000000,
    notes: "Packaging materials, supplies",
    status: "Planned",
  },
  {
    category: "Staff Training",
    estimated: 800000,
    actual: 0,
    remaining: 800000,
    notes: "Training programs, certification",
    status: "Planned",
  },
  {
    category: "Contingency Fund",
    estimated: 1200000,
    actual: 0,
    remaining: 1200000,
    notes: "Emergency expenses buffer",
    status: "Planned",
  },
]

const chartData = budgetData.map((item) => ({
  name: item.category.split(" ")[0],
  estimated: item.estimated / 1000000,
  actual: item.actual / 1000000,
  remaining: item.remaining / 1000000,
}))

const pieData = budgetData.map((item) => ({
  name: item.category,
  value: item.estimated,
  percentage: ((item.estimated / budgetData.reduce((sum, b) => sum + b.estimated, 0)) * 100).toFixed(1),
}))

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#FFC658", "#FF7C7C"]

export function BudgetTracking() {
  const totalBudget = budgetData.reduce((sum, item) => sum + item.estimated, 0)
  const totalSpent = budgetData.reduce((sum, item) => sum + item.actual, 0)
  const totalRemaining = budgetData.reduce((sum, item) => sum + item.remaining, 0)
  const utilizationRate = (totalSpent / totalBudget) * 100

  return (
    <div className="space-y-6">
      {/* Budget Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp {(totalBudget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Allocated for project</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">Rp {(totalSpent / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">{utilizationRate.toFixed(1)}% utilized</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Rp {(totalRemaining / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">{(100 - utilizationRate).toFixed(1)}% available</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="text-green-600 border-green-600">
              On Track
            </Badge>
            <p className="text-xs text-muted-foreground mt-1">No overspending</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Budget Breakdown Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation</CardTitle>
            <CardDescription>Distribution of budget across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name.split(" ")[0]}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`Rp ${(value / 1000000).toFixed(1)}M`, "Budget"]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Budget vs Actual Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Budget vs Actual Spending</CardTitle>
            <CardDescription>Comparison of planned vs actual expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Million Rp", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value: number) => [`Rp ${value}M`, ""]} />
                <Bar dataKey="estimated" fill="#8884d8" name="Estimated" />
                <Bar dataKey="actual" fill="#82ca9d" name="Actual" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Budget Table */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Details</CardTitle>
          <CardDescription>Detailed breakdown of all budget categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{item.category}</h3>
                  <Badge variant="outline">{item.status}</Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{item.notes}</p>

                <div className="grid gap-2 md:grid-cols-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Estimated: </span>
                    <span className="font-medium">Rp {(item.estimated / 1000000).toFixed(1)}M</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Actual: </span>
                    <span className="font-medium">Rp {(item.actual / 1000000).toFixed(1)}M</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Remaining: </span>
                    <span className="font-medium text-green-600">Rp {(item.remaining / 1000000).toFixed(1)}M</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Utilization</span>
                    <span>{((item.actual / item.estimated) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(item.actual / item.estimated) * 100} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
