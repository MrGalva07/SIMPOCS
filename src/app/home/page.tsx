'use client'
import { AppSidebar } from "@/components/ui/app-sidebar";
import {

  SidebarProvider,

} from "@/components/ui/sidebar";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import { CardAdesao } from "@/app/relatorios/_components/card";
import MapComponent from "@/components/MapComponent";
import { useState } from "react";
import { FiTruck, FiTrash  } from "react-icons/fi";
import {PiBoxArrowDown } from "react-icons/pi";

export type Report = {
  name: string;
  collected: number;
  total: number;
};

const Page = () => {
  const [latitude] = useState<number>(-8.05388888888889); 
const [longitude] = useState<number>(-34.881111); 

 
  const dataGood = [
    { name: "Jaboatão dos Guararapes", collected: 42000, total: 45000 },
    { name: "Olinda", collected: 37200, total: 40000 },
    { name: "Paulista", collected: 39800, total: 43000 },
    { name: "Camaragibe", collected: 33100, total: 38000 },

  ];
  

  return (
    <main className="flex justify-center">
      <aside>
        <SidebarProvider className="bg-[#F2F3F2] static absolute-top">
          <AppSidebar />
          {/*<SidebarTrigger />*/}
          <main></main>
        </SidebarProvider>
      </aside>

      <div className="flex flex-col w-full p-2.5 gap-2 bg-[#B9C6BF] ">
        <div className="flex flex-col w-full p-3.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2] justify-center">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold w-fit">
              Seu dashboard
            </h1>
            
          </div>
        </div>

        <div className="flex flex-col w-full h-fit p-2.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2]">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 w-full justify-center">
             
            <article id="MAP" className="flex justify-center mt-2">
          <div id="map" className="border-2 w-[900px] h-72">
            {/* Passando latitude e longitude como props */}
            <MapComponent latitude={latitude} longitude={longitude} />
          </div>
        </article>
            
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
         
            <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Visão Geral


              <div className=" flex-col mb-10 w-[500px]">
                
              <div className='flex h-12 items-center w-[500px] rounded-sm gap-60 border mt-10 mb-5 justify-center '>
                <div>
                 <div><h3 className='font-medium text-[13pt]'> Regiões de coleta</h3></div>
                 </div>

                 <div className="flex">
                  <div><h4>82</h4></div>
                  <div className="ml-2">  <FiTruck color="green" /></div>
                  </div>
                </div>
              
              
                <div className='flex h-12 items-center w-[500px] rounded-sm gap-60 border mt-10 mb-5 justify-center'>
                  <div>
                 <div><h3 className='font-medium text-[13pt]'> Regiões de coleta</h3></div>
                 </div>

                 <div className="flex">
                  <div><h4>11</h4></div>
                 <div className="ml-2"> <PiBoxArrowDown /> </div>
                  </div>
                </div>
           
            
                  
                <div className='flex h-12 items-center w-[500px] rounded-sm gap-60 border mt-10 mb-5 justify-center'>
                  <div >
                 <div><h3 className='font-medium text-[13pt]'> Regiões de coleta</h3></div>
                 </div>
                 <div className="flex">
                  <div><h4>64</h4></div>
                  <div className="ml-2"><FiTrash /></div>
                  </div>
                </div>
          
          </div>
                </CardTitle>
              </CardHeader>
             
             
            </Card>

            <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Regiões com maior adesão da Coleta Seletiva no último mês
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2.5">
                {dataGood.map((report, key) => (
                  <CardAdesao report={report} key={key}></CardAdesao>
                ))}
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
