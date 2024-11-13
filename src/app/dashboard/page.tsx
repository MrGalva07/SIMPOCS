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
    <div className='text-red-700 m-96 text-center   '>Esse é o meu dashboard</div>
    
    </main>
  )
}

export default page