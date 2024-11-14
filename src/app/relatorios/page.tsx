import { AppSidebar } from '@/components/ui/app-sidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'


const page = () => {
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