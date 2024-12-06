import { Calendar, Home, Inbox,} from "lucide-react"
import img3 from "@/app/assets/images/img3.png" 
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Início",
    url: "/home",
    icon: Home,
  },
  {
    title: "Regiões",
    url: "/regioes",
    icon: Inbox,
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: Calendar,
  },


]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image
            src ={img3}
            alt="logo"
            className="h-16 w-40 m-6 mt-36 "
            />
          </SidebarGroupLabel >
          <SidebarGroupContent>
            <SidebarMenu className="mt-40">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
