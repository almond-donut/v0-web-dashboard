"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pertNodes = [
  { id: 1, name: "Start", x: 50, y: 200, duration: 0, type: "milestone" },
  { id: 2, name: "Market Research", x: 150, y: 100, duration: 45, type: "task" },
  { id: 3, name: "Business Plan", x: 150, y: 300, duration: 29, type: "task" },
  { id: 4, name: "Menu Development", x: 150, y: 200, duration: 60, type: "task" },
  { id: 5, name: "Equipment Procurement", x: 300, y: 100, duration: 46, type: "task" },
  { id: 6, name: "Location Setup", x: 300, y: 300, duration: 44, type: "task" },
  { id: 7, name: "Marketing Campaign", x: 450, y: 150, duration: 25, type: "task" },
  { id: 8, name: "Soft Launch", x: 600, y: 200, duration: 6, type: "milestone" },
  { id: 9, name: "Grand Opening", x: 750, y: 200, duration: 0, type: "milestone" },
]

const pertEdges = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 8 },
  { from: 6, to: 8 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
]

const criticalPath = [1, 4, 7, 8, 9] // Menu Development -> Marketing -> Soft Launch -> Grand Opening

export function PertDiagram() {
  const isCritical = (nodeId: number) => criticalPath.includes(nodeId)

  const getNodeColor = (type: string, critical: boolean) => {
    if (critical) return "bg-red-100 border-red-500 text-red-800"
    if (type === "milestone") return "bg-purple-100 border-purple-500 text-purple-800"
    return "bg-blue-100 border-blue-500 text-blue-800"
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>PERT/CPM Network Diagram</CardTitle>
          <CardDescription>
            Program Evaluation and Review Technique showing project dependencies and critical path
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="relative bg-gray-50 rounded-lg p-8 overflow-x-auto"
            style={{ minHeight: "400px", minWidth: "800px" }}
          >
            {/* Draw edges first */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {pertEdges.map((edge, index) => {
                const fromNode = pertNodes.find((n) => n.id === edge.from)
                const toNode = pertNodes.find((n) => n.id === edge.to)
                if (!fromNode || !toNode) return null

                const isCriticalEdge = isCritical(edge.from) && isCritical(edge.to)

                return (
                  <line
                    key={index}
                    x1={fromNode.x + 40}
                    y1={fromNode.y + 20}
                    x2={toNode.x}
                    y2={toNode.y + 20}
                    stroke={isCriticalEdge ? "#ef4444" : "#6b7280"}
                    strokeWidth={isCriticalEdge ? "3" : "2"}
                    markerEnd="url(#arrowhead)"
                  />
                )
              })}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                </marker>
              </defs>
            </svg>

            {/* Draw nodes */}
            {pertNodes.map((node) => (
              <div
                key={node.id}
                className={`absolute border-2 rounded-lg p-2 text-center min-w-20 ${getNodeColor(node.type, isCritical(node.id))}`}
                style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="font-semibold text-xs">{node.name}</div>
                {node.duration > 0 && <div className="text-xs mt-1">{node.duration}d</div>}
                {isCritical(node.id) && (
                  <Badge variant="destructive" className="text-xs mt-1">
                    Critical
                  </Badge>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded"></div>
              <span>Critical Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
              <span>Regular Task</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 border-2 border-purple-500 rounded"></div>
              <span>Milestone</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Critical Path Analysis</CardTitle>
            <CardDescription>Tasks that determine the minimum project duration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pertNodes
                .filter((node) => isCritical(node.id))
                .map((node) => (
                  <div
                    key={node.id}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                  >
                    <div>
                      <div className="font-semibold text-red-800">{node.name}</div>
                      <div className="text-sm text-red-600">
                        {node.duration > 0 ? `${node.duration} days` : "Milestone"}
                      </div>
                    </div>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                ))}
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="font-semibold text-yellow-800">Total Critical Path Duration</div>
              <div className="text-2xl font-bold text-yellow-900">
                {pertNodes.filter((n) => isCritical(n.id)).reduce((sum, n) => sum + n.duration, 0)} days
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Network Statistics</CardTitle>
            <CardDescription>Key metrics from the PERT analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Tasks:</span>
                <span className="font-semibold">{pertNodes.filter((n) => n.type === "task").length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Milestones:</span>
                <span className="font-semibold">{pertNodes.filter((n) => n.type === "milestone").length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Critical Tasks:</span>
                <span className="font-semibold text-red-600">
                  {pertNodes.filter((n) => isCritical(n.id) && n.type === "task").length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Project Duration:</span>
                <span className="font-semibold">
                  {pertNodes.filter((n) => isCritical(n.id)).reduce((sum, n) => sum + n.duration, 0)} days
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Float Available:</span>
                <span className="font-semibold text-green-600">
                  {pertNodes.filter((n) => !isCritical(n.id) && n.type === "task").length} tasks
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
