"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, Calendar } from "lucide-react"

const timelineEvents = [
  {
    id: 1,
    title: "Business concept development",
    date: "2023-04-30",
    type: "completed",
    description: "Finalized bakery concept and vision",
    category: "Planning",
  },
  {
    id: 2,
    title: "Competitor analysis",
    date: "2023-05-05",
    type: "completed",
    description: "Analyzed 10 local competitors",
    category: "Research",
  },
  {
    id: 3,
    title: "Logo concepts ready",
    date: "2023-05-25",
    type: "in-progress",
    description: "Logo concepts ready for final review (75% complete)",
    category: "Design",
  },
  {
    id: 4,
    title: "Menu recipes finalization",
    date: "2023-05-31",
    type: "in-progress",
    description: "Testing and perfecting recipes (50% complete)",
    category: "Product",
  },
  {
    id: 5,
    title: "Business license deadline",
    date: "2023-05-20",
    type: "critical",
    description: "Critical: Obtain business license",
    category: "Legal",
  },
  {
    id: 6,
    title: "Create Business Plan",
    date: "2023-06-01",
    type: "upcoming",
    description: "Develop comprehensive business plan",
    category: "Planning",
  },
  {
    id: 7,
    title: "Equipment procurement completion",
    date: "2023-06-15",
    type: "upcoming",
    description: "Finalize equipment sourcing and purchasing",
    category: "Operations",
  },
  {
    id: 8,
    title: "Location setup completion",
    date: "2023-07-15",
    type: "upcoming",
    description: "Complete location setup and interior design",
    category: "Operations",
  },
  {
    id: 9,
    title: "Soft Launch",
    date: "2023-07-01",
    type: "milestone",
    description: "Launch with friends and family",
    category: "Launch",
  },
  {
    id: 10,
    title: "Grand Opening",
    date: "2023-07-15",
    type: "milestone",
    description: "Official public launch",
    category: "Launch",
  },
]

export function TimelineView() {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "critical":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case "milestone":
        return <Calendar className="h-4 w-4 text-purple-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getEventBadge = (type: string) => {
    switch (type) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        )
      case "in-progress":
        return <Badge variant="secondary">In Progress</Badge>
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "milestone":
        return (
          <Badge variant="outline" className="border-purple-200 text-purple-800">
            Milestone
          </Badge>
        )
      default:
        return <Badge variant="outline">Upcoming</Badge>
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Planning: "bg-blue-100 text-blue-800",
      Research: "bg-green-100 text-green-800",
      Design: "bg-purple-100 text-purple-800",
      Product: "bg-orange-100 text-orange-800",
      Legal: "bg-red-100 text-red-800",
      Operations: "bg-yellow-100 text-yellow-800",
      Launch: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
        <CardDescription>Chronological view of project milestones, tasks, and critical events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-4">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-full">
                  {getEventIcon(event.type)}
                </div>

                {/* Event content */}
                <div className="flex-1 min-w-0 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    {getEventBadge(event.type)}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                    <Badge variant="outline" className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
