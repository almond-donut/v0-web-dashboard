import {
  Calendar,
  CheckSquare,
  DollarSign,
  FileText,
  GanttChartIcon as Gantt,
  Home,
  Network,
  Target,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Overview",
    url: "#overview",
    icon: Home,
  },
  {
    title: "Gantt Chart",
    url: "#gantt",
    icon: Gantt,
  },
  {
    title: "Timeline",
    url: "#timeline",
    icon: Calendar,
  },
  {
    title: "Tasks",
    url: "#tasks",
    icon: CheckSquare,
  },
  {
    title: "Budget",
    url: "#budget",
    icon: DollarSign,
  },
  {
    title: "Risks",
    url: "#risks",
    icon: AlertTriangle,
  },
  {
    title: "PERT/CPM",
    url: "#pert",
    icon: Network,
  },
  {
    title: "Progress",
    url: "#progress",
    icon: TrendingUp,
  },
  {
    title: "Reports",
    url: "#reports",
    icon: FileText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-600" />
          <h2 className="text-lg font-semibold">Sweet Bakery PM</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Project Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">Last sync: {new Date().toLocaleTimeString()}</div>
      </SidebarFooter>
    </Sidebar>
  )
}
