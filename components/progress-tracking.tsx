"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, Target, Calendar, CheckCircle } from "lucide-react"

const progressData = [
  { week: "Week 1", planned: 10, actual: 8, cumulative: 8 },
  { week: "Week 2", planned: 20, actual: 18, cumulative: 26 },
  { week: "Week 3", planned: 35, actual: 32, cumulative: 58 },
  { week: "Week 4", planned: 50, actual: 45, cumulative: 103 },
  { week: "Week 5", planned: 65, actual: 58, cumulative: 161 },
  { week: "Week 6", planned: 80, actual: 70, cumulative: 231 },
]

const milestoneData = [
  {
    milestone: "Business Planning Phase",
    targetDate: "2023-06-30",
    actualDate: "2023-06-28",
    status: "Completed",
    progress: 100,
    tasks: 5,
    completedTasks: 5,
  },
  {
    milestone: "Setup & Procurement Phase",
    targetDate: "2023-07-15",
    actualDate: null,
    status: "In Progress",
    progress: 65,
    tasks: 8,
    completedTasks: 5,
  },
  {
    milestone: "Launch Preparation Phase",
    targetDate: "2023-07-30",
    actualDate: null,
    status: "Not Started",
    progress: 0,
    tasks: 6,
    completedTasks: 0,
  },
  {
    milestone: "Grand Opening",
    targetDate: "2023-08-15",
    actualDate: null,
    status: "Not Started",
    progress: 0,
    tasks: 3,
    completedTasks: 0,
  },
]

const kpiData = [
  {
    metric: "Overall Progress",
    current: 31.25,
    target: 40,
    unit: "%",
    trend: "up",
    status: "behind",
  },
  {
    metric: "Budget Utilization",
    current: 0,
    target: 25,
    unit: "%",
    trend: "stable",
    status: "good",
  },
  {
    metric: "Tasks Completed",
    current: 5,
    target: 8,
    unit: "tasks",
    trend: "up",
    status: "behind",
  },
  {
    metric: "Risk Score",
    current: 6.2,
    target: 4.0,
    unit: "score",
    trend: "up",
    status: "warning",
  },
]

export function ProgressTracking() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        )
      case "In Progress":
        return <Badge variant="secondary">In Progress</Badge>
      case "Not Started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getKPIStatus = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600"
      case "warning":
        return "text-yellow-600"
      case "behind":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded-full" />
    }
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                {kpi.metric}
                {getTrendIcon(kpi.trend)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getKPIStatus(kpi.status)}`}>
                {kpi.current}
                {kpi.unit}
              </div>
              <p className="text-xs text-muted-foreground">
                Target: {kpi.target}
                {kpi.unit}
              </p>
              <Progress value={(kpi.current / kpi.target) * 100} className="mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Progress Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>Planned vs actual progress over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis label={{ value: "Progress %", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Line type="monotone" dataKey="planned" stroke="#8884d8" strokeDasharray="5 5" name="Planned" />
                <Line type="monotone" dataKey="actual" stroke="#82ca9d" strokeWidth={2} name="Actual" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cumulative Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Cumulative Progress</CardTitle>
            <CardDescription>Total work completed over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="cumulative"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                  name="Cumulative Hours"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Milestone Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Milestone Progress</CardTitle>
          <CardDescription>Status of major project milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestoneData.map((milestone, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{milestone.milestone}</h3>
                  {getStatusBadge(milestone.status)}
                </div>

                <div className="grid gap-2 md:grid-cols-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Target: {milestone.targetDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {milestone.completedTasks}/{milestone.tasks} tasks
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>{milestone.progress}% complete</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{milestone.progress}%</span>
                  </div>
                  <Progress value={milestone.progress} />
                </div>

                {milestone.actualDate && (
                  <div className="text-sm text-green-600">✓ Completed on {milestone.actualDate}</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>Overall project health and performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">✓ On Track</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Budget utilization within limits</li>
                <li>• Key milestones achievable</li>
                <li>• Team productivity stable</li>
                <li>• Quality standards maintained</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-yellow-600">⚠ Areas of Concern</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Task completion slightly behind schedule</li>
                <li>• Risk score above target threshold</li>
                <li>• Some dependencies causing delays</li>
                <li>• Resource allocation needs review</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
