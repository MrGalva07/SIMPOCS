import { AppSidebar } from '@/components/ui/app-sidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import mapImage from '@/app/assets/images/mapImage.jpeg'
import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <main className='flex justify-center'>
      <aside >
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />

          </main>
        </SidebarProvider>
      </aside>


      <section className='flex-col border-2  top-0  w-[100%] h-[100vh] justify-center items-center static '>

        <article id='MAP' className='flex justify-center mt-4 '  >
          <div id='map' className='border-2 border-e-red-500 w-[900px] h-72  ' >
            <Image src={mapImage} alt="imagemMapa" className='w-[100%] h-[100%]' />


          </div>


        </article>

        <article id="dash" className=' flex border-2 w-[100%] h-96 '>

          <div id='visaoGeral' className='border-2 w-[550px] h-80 flex-col justify-center m-3'>
            <h2 className='text-center font-bold text-xl mb-10 mt-6 text-[17pt]'>Visão Geral</h2>
            <ul className='flex-col  justify-center w-[100%] max-w-[400px]  items-center'>

              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
                <div className='flex justify-start gap-52 h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt]'> Regiões de coleta</h3>
                  <h4>82</h4>
                </div>
              </li>
              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
              <div className='flex justify-start  gap-64  h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt] '> EcoEstações</h3>
                  <h4>11</h4>
                </div>
              </li>
              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
              <div className='flex justify-start  gap-32  h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt] '> Pontos de Entrega voluntária</h3>
                  <h4>64</h4>
                </div>

              </li>
            </ul>
          </div>




          <div className='border-2  w-[550px] h-80 justify-center m-3'>

            <h2 className='text-center font-bold text-xl mb-10 mt-6 '>Regiões com maior adesão da coleta seletiva</h2>
            <ul className='flex-col  justify-center w-[100%] max-w-[400px]  items-center'>

              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
                <div className='flex justify-start gap-52 h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt]'> Ouro Preto</h3>
                  <h4>82%</h4>
                </div>
              </li>
              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
              <div className='flex justify-start  gap-64  h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt] '>Peixinhos</h3>
                  <h4>80%</h4>
                </div>
              </li>
              <li className='mb-6 border border-slate-300 rounded-sm flex justify-start ' >
              <div className='flex justify-start  gap-32  h-12 items-center w-[450px] rounded-sm'>
                  <h3 className='font-medium text-[13pt] '> Bairro Novo</h3>
                  <h4>77%</h4>
                </div>

              </li>
            </ul>

          </div>
        </article>

      </section>

    </main>
  )
}

export default page