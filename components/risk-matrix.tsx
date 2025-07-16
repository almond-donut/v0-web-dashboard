"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingUp, Eye, Clock } from "lucide-react"

const riskData = [
  {
    id: "R001",
    description: "Supplier delays",
    likelihood: "Medium",
    impact: "High",
    score: 6,
    mitigation: "Identify backup suppliers",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-06-01",
  },
  {
    id: "R002",
    description: "Equipment breakdown",
    likelihood: "Low",
    impact: "High",
    score: 4,
    mitigation: "Maintenance contracts and backup equipment",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-06-15",
  },
  {
    id: "R003",
    description: "Staff turnover",
    likelihood: "Medium",
    impact: "Medium",
    score: 4,
    mitigation: "Competitive compensation and training",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-07-01",
  },
  {
    id: "R004",
    description: "Economic downturn",
    likelihood: "Medium",
    impact: "High",
    score: 6,
    mitigation: "Diversify revenue streams",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-06-01",
  },
  {
    id: "R005",
    description: "Competition increase",
    likelihood: "High",
    impact: "Medium",
    score: 6,
    mitigation: "Focus on unique value proposition",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-05-15",
  },
  {
    id: "R006",
    description: "Regulatory changes",
    likelihood: "Low",
    impact: "Medium",
    score: 2,
    mitigation: "Stay updated with regulations",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-08-01",
  },
  {
    id: "R007",
    description: "Supply cost inflation",
    likelihood: "High",
    impact: "High",
    score: 9,
    mitigation: "Long-term supplier contracts",
    status: "Critical",
    owner: "Anda",
    reviewDate: "2023-05-20",
  },
  {
    id: "R008",
    description: "Customer preference changes",
    likelihood: "Medium",
    impact: "Medium",
    score: 4,
    mitigation: "Regular market research",
    status: "Monitoring",
    owner: "Anda",
    reviewDate: "2023-07-15",
  },
]

export function RiskMatrix() {
  const getRiskLevel = (score: number) => {
    if (score >= 8) return { level: "Critical", color: "bg-red-500", textColor: "text-red-700" }
    if (score >= 6) return { level: "High", color: "bg-orange-500", textColor: "text-orange-700" }
    if (score >= 4) return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-700" }
    return { level: "Low", color: "bg-green-500", textColor: "text-green-700" }
  }

  const getRiskBadge = (status: string) => {
    switch (status) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>
      case "Monitoring":
        return <Badge variant="secondary">Monitoring</Badge>
      default:
        return <Badge variant="outline">Active</Badge>
    }
  }

  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const criticalRisks = riskData.filter((risk) => risk.score >= 8)
  const highRisks = riskData.filter((risk) => risk.score >= 6 && risk.score < 8)
  const mediumRisks = riskData.filter((risk) => risk.score >= 4 && risk.score < 6)
  const lowRisks = riskData.filter((risk) => risk.score < 4)

  return (
    <div className="space-y-6">
      {/* Risk Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              Critical Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalRisks.length}</div>
            <p className="text-xs text-muted-foreground">Immediate attention required</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-600" />
              High Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{highRisks.length}</div>
            <p className="text-xs text-muted-foreground">Close monitoring needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Eye className="h-4 w-4 text-yellow-600" />
              Medium Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{mediumRisks.length}</div>
            <p className="text-xs text-muted-foreground">Regular review required</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-600" />
              Low Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{lowRisks.length}</div>
            <p className="text-xs text-muted-foreground">Periodic monitoring</p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Matrix Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Matrix</CardTitle>
          <CardDescription>Visual representation of risks by likelihood and impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div></div>
            <div className="text-center text-sm font-medium">Low Impact</div>
            <div className="text-center text-sm font-medium">Medium Impact</div>
            <div className="text-center text-sm font-medium">High Impact</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="text-sm font-medium">High Likelihood</div>
            <div className="h-20 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "High" && r.impact === "Low")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-orange-100 border-2 border-orange-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "High" && r.impact === "Medium")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "High" && r.impact === "High")
                .map((r) => (
                  <div key={r.id} className="text-center font-bold">
                    {r.id}
                  </div>
                ))}
            </div>

            <div className="text-sm font-medium">Medium Likelihood</div>
            <div className="h-20 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Medium" && r.impact === "Low")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Medium" && r.impact === "Medium")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-orange-100 border-2 border-orange-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Medium" && r.impact === "High")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>

            <div className="text-sm font-medium">Low Likelihood</div>
            <div className="h-20 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Low" && r.impact === "Low")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Low" && r.impact === "Medium")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
            <div className="h-20 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs p-2">
              {riskData
                .filter((r) => r.likelihood === "Low" && r.impact === "High")
                .map((r) => (
                  <div key={r.id} className="text-center">
                    {r.id}
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Risk List */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Register</CardTitle>
          <CardDescription>Comprehensive list of all identified risks with mitigation strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskData.map((risk) => {
              const riskLevel = getRiskLevel(risk.score)
              return (
                <div key={risk.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{risk.id}</span>
                        <h3 className="font-semibold">{risk.description}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {getRiskBadge(risk.status)}
                      <div className={`text-center px-2 py-1 rounded text-xs font-bold ${riskLevel.color} text-white`}>
                        Score: {risk.score}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 md:grid-cols-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Likelihood: </span>
                      <Badge variant="outline" className={getLikelihoodColor(risk.likelihood)}>
                        {risk.likelihood}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Impact: </span>
                      <Badge variant="outline" className={getImpactColor(risk.impact)}>
                        {risk.impact}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Owner: </span>
                      <span className="font-medium">{risk.owner}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Review: </span>
                      <span className="font-medium">{risk.reviewDate}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
