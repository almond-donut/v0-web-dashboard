"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, AlertCircle, User } from "lucide-react"

const todoTasks = [
  {
    id: 1,
    name: "Create Business Plan",
    description: "Develop a comprehensive business plan",
    assignedTo: "Anda",
    dueDate: "2023-06-01",
    status: "Not Started",
    priority: "High",
    category: "Planning",
  },
  {
    id: 2,
    name: "Market Research: Competitors & Target Customers",
    description: "Analyze competitors and define target audience",
    assignedTo: "Anda",
    dueDate: "2023-06-15",
    status: "Not Started",
    priority: "High",
    category: "Research",
  },
  {
    id: 3,
    name: "Obtain business license",
    description: "Register business with local authorities",
    assignedTo: "Anda",
    dueDate: "2023-05-20",
    status: "Not Started",
    priority: "Critical",
    category: "Legal",
  },
]

const inProgressTasks = [
  {
    id: 4,
    name: "Finalizing menu recipes",
    description: "Testing and perfecting recipes",
    assignedTo: "Anda",
    startDate: "2023-05-01",
    dueDate: "2023-05-31",
    progress: 50,
    statusUpdate: "Half of the recipes are finalized",
    lastUpdated: "2023-05-15",
  },
  {
    id: 5,
    name: "Equipment procurement",
    description: "Sourcing and purchasing bakery equipment",
    assignedTo: "Anda",
    startDate: "2023-05-15",
    dueDate: "2023-06-15",
    progress: 25,
    statusUpdate: "Comparing suppliers and prices",
    lastUpdated: "2023-05-20",
  },
  {
    id: 6,
    name: "Logo and branding design",
    description: "Creating visual identity for bakery",
    assignedTo: "Anda",
    startDate: "2023-05-10",
    dueDate: "2023-06-10",
    progress: 75,
    statusUpdate: "Logo concepts ready for final review",
    lastUpdated: "2023-05-25",
  },
]

const completedTasks = [
  {
    id: 7,
    name: "Registered domain name",
    completionDate: "2023-04-15",
    notes: "www.sweetbakery.com",
    duration: 1,
    category: "Digital",
  },
  {
    id: 8,
    name: "Created Instagram account",
    completionDate: "2023-04-20",
    notes: "@sweetbakery",
    duration: 1,
    category: "Marketing",
  },
  {
    id: 9,
    name: "Initial market research",
    completionDate: "2023-04-25",
    notes: "Identified target demographics",
    duration: 7,
    category: "Research",
  },
]

export function TaskManagement() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>
      case "High":
        return <Badge variant="secondary">High</Badge>
      case "Medium":
        return <Badge variant="outline">Medium</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Planning: "bg-blue-100 text-blue-800",
      Research: "bg-green-100 text-green-800",
      Legal: "bg-red-100 text-red-800",
      Digital: "bg-purple-100 text-purple-800",
      Marketing: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              To Do
            </CardTitle>
            <CardDescription>{todoTasks.length} tasks pending</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              In Progress
            </CardTitle>
            <CardDescription>{inProgressTasks.length} tasks active</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Completed
            </CardTitle>
            <CardDescription>{completedTasks.length} tasks done</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="todo" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todo">To Do ({todoTasks.length})</TabsTrigger>
          <TabsTrigger value="progress">In Progress ({inProgressTasks.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="todo">
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Tasks that need to be started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todoTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{task.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {task.assignedTo}
                      </div>
                      <div>Due: {task.dueDate}</div>
                      <Badge variant="outline" className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Tasks in Progress</CardTitle>
              <CardDescription>Currently active tasks with progress tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inProgressTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{task.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                      </div>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} />
                    </div>

                    <div className="text-sm">
                      <p className="font-medium">Latest Update:</p>
                      <p className="text-muted-foreground">{task.statusUpdate}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {task.assignedTo}
                      </div>
                      <div>Due: {task.dueDate}</div>
                      <div>Updated: {task.lastUpdated}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
              <CardDescription>Successfully finished tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4 space-y-3 bg-green-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {task.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.notes}</p>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div>Completed: {task.completionDate}</div>
                      <div>
                        Duration: {task.duration} day{task.duration > 1 ? "s" : ""}
                      </div>
                      <Badge variant="outline" className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
