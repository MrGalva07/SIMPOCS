import React from 'react'
import { Sidebar, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/app-sidebar'

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
 <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      
      </main>
    </SidebarProvider>

    </main>
  )
}

export default page