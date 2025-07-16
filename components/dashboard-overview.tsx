"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GanttChart } from "@/components/gantt-chart"
import { TimelineView } from "@/components/timeline-view"
import { TaskManagement } from "@/components/task-management"
import { BudgetTracking } from "@/components/budget-tracking"
import { RiskMatrix } from "@/components/risk-matrix"
import { PertDiagram } from "@/components/pert-diagram"
import { ProgressTracking } from "@/components/progress-tracking"
import { CheckCircle, AlertCircle, DollarSign, Calendar } from "lucide-react"

export function DashboardOverview() {
  const overviewStats = {
    totalTasks: 16,
    completedTasks: 5,
    inProgressTasks: 4,
    notStartedTasks: 7,
    totalBudget: 14000000,
    spentBudget: 0,
    criticalRisks: 1,
    highRisks: 3,
    onTrackMilestones: 6,
    delayedMilestones: 1,
  }

  const completionRate = (overviewStats.completedTasks / overviewStats.totalTasks) * 100
  const budgetUtilization = (overviewStats.spentBudget / overviewStats.totalBudget) * 100

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sweet Bakery Project Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive project management and tracking system</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Project Phase: Planning & Setup
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              {overviewStats.completedTasks} of {overviewStats.totalTasks} tasks completed
            </p>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp {(overviewStats.totalBudget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">{budgetUtilization.toFixed(1)}% utilized</p>
            <Progress value={budgetUtilization} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {overviewStats.criticalRisks + overviewStats.highRisks}
            </div>
            <p className="text-xs text-muted-foreground">
              {overviewStats.criticalRisks} critical, {overviewStats.highRisks} high risks
            </p>
            <div className="flex gap-1 mt-2">
              <Badge variant="destructive" className="text-xs">
                Critical: {overviewStats.criticalRisks}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                High: {overviewStats.highRisks}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline Status</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{overviewStats.onTrackMilestones}</div>
            <p className="text-xs text-muted-foreground">milestones on track</p>
            <div className="flex gap-1 mt-2">
              <Badge variant="default" className="text-xs">
                On Track: {overviewStats.onTrackMilestones}
              </Badge>
              <Badge variant="destructive" className="text-xs">
                Delayed: {overviewStats.delayedMilestones}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gantt">Gantt</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
          <TabsTrigger value="pert">PERT/CPM</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest project updates and milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Logo concepts ready for final review</p>
                    <p className="text-xs text-muted-foreground">75% progress - 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Half of the recipes are finalized</p>
                    <p className="text-xs text-muted-foreground">50% progress - 3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Comparing suppliers and prices</p>
                    <p className="text-xs text-muted-foreground">25% progress - 1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Critical tasks and milestones approaching</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Obtain business license</p>
                    <p className="text-xs text-muted-foreground">Critical priority</p>
                  </div>
                  <Badge variant="destructive">May 20</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Finalizing menu recipes</p>
                    <p className="text-xs text-muted-foreground">In progress</p>
                  </div>
                  <Badge variant="secondary">May 31</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Create Business Plan</p>
                    <p className="text-xs text-muted-foreground">High priority</p>
                  </div>
                  <Badge variant="outline">Jun 01</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gantt">
          <GanttChart />
        </TabsContent>

        <TabsContent value="timeline">
          <TimelineView />
        </TabsContent>

        <TabsContent value="tasks">
          <TaskManagement />
        </TabsContent>

        <TabsContent value="budget">
          <BudgetTracking />
        </TabsContent>

        <TabsContent value="risks">
          <RiskMatrix />
        </TabsContent>

        <TabsContent value="pert">
          <PertDiagram />
        </TabsContent>

        <TabsContent value="progress">
          <ProgressTracking />
        </TabsContent>
      </Tabs>
    </div>
  )
}
