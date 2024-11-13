import React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      
      <main>
       
        {children}
      </main>
    </SidebarProvider>
  )
}

export default page