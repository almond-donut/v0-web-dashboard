"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const ganttData = [
  {
    id: 1,
    task: "Create Business Plan",
    startDate: "2023-06-01",
    endDate: "2023-06-30",
    duration: 29,
    progress: 0,
    status: "Not Started",
    critical: true,
    dependencies: [],
  },
  {
    id: 2,
    task: "Market Research",
    startDate: "2023-05-01",
    endDate: "2023-06-15",
    duration: 45,
    progress: 60,
    status: "In Progress",
    critical: true,
    dependencies: [],
  },
  {
    id: 3,
    task: "Equipment Procurement",
    startDate: "2023-05-15",
    endDate: "2023-06-30",
    duration: 46,
    progress: 25,
    status: "In Progress",
    critical: true,
    dependencies: [2],
  },
  {
    id: 4,
    task: "Location Setup",
    startDate: "2023-06-01",
    endDate: "2023-07-15",
    duration: 44,
    progress: 0,
    status: "Not Started",
    critical: true,
    dependencies: [1],
  },
  {
    id: 5,
    task: "Menu Development",
    startDate: "2023-05-01",
    endDate: "2023-06-30",
    duration: 60,
    progress: 50,
    status: "In Progress",
    critical: true,
    dependencies: [],
  },
  {
    id: 6,
    task: "Marketing Campaign",
    startDate: "2023-06-20",
    endDate: "2023-07-15",
    duration: 25,
    progress: 0,
    status: "Not Started",
    critical: false,
    dependencies: [5],
  },
  {
    id: 7,
    task: "Soft Launch",
    startDate: "2023-07-01",
    endDate: "2023-07-07",
    duration: 6,
    progress: 0,
    status: "Not Started",
    critical: true,
    dependencies: [4],
  },
  {
    id: 8,
    task: "Grand Opening",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    duration: 0,
    progress: 0,
    status: "Not Started",
    critical: true,
    dependencies: [7],
  },
]

export function GanttChart() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-blue-500"
      case "Not Started":
        return "bg-gray-300"
      default:
        return "bg-gray-300"
    }
  }

  const getStatusBadge = (status: string, critical: boolean) => {
    const variant = status === "Completed" ? "default" : status === "In Progress" ? "secondary" : "outline"
    return (
      <div className="flex gap-2">
        <Badge variant={variant}>{status}</Badge>
        {critical && <Badge variant="destructive">Critical</Badge>}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gantt Chart - Project Timeline</CardTitle>
        <CardDescription>Visual representation of project tasks, dependencies, and critical path</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Timeline Header */}
          <div className="grid grid-cols-12 gap-2 text-xs font-medium text-muted-foreground border-b pb-2">
            <div className="col-span-3">Task</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-2">Progress</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-3">Timeline</div>
          </div>

          {/* Gantt Rows */}
          {ganttData.map((task) => (
            <div key={task.id} className="grid grid-cols-12 gap-2 items-center py-2 border-b">
              <div className="col-span-3">
                <div className="font-medium text-sm">{task.task}</div>
                <div className="text-xs text-muted-foreground">
                  {task.startDate} - {task.endDate}
                </div>
              </div>

              <div className="col-span-2 text-sm">{task.duration} days</div>

              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <Progress value={task.progress} className="flex-1" />
                  <span className="text-xs">{task.progress}%</span>
                </div>
              </div>

              <div className="col-span-2">{getStatusBadge(task.status, task.critical)}</div>

              <div className="col-span-3">
                <div className="relative h-6 bg-gray-100 rounded">
                  <div
                    className={`absolute left-0 top-0 h-full rounded ${getStatusColor(task.status)} ${task.critical ? "border-2 border-red-400" : ""}`}
                    style={{ width: `${Math.max(task.progress, 10)}%` }}
                  />
                  {task.progress > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                      {task.progress}%
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <span>Not Started</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 border-2 border-red-600 rounded"></div>
            <span>Critical Path</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
