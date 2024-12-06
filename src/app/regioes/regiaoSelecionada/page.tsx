"use client";
import { AppSidebar } from '@/components/ui/app-sidebar';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CardAdesao } from "@/app/relatorios/_components/card";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MapComponent2 from '@/components/MapComponent';
import Modal from '@/components/ui/modal';
import { GoPlusCircle } from "react-icons/go";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const page = () => {
  const [dataGood, setDataGood] = useState([
    { name: "Agosto/2024", collected: 75.809, total: 125.845 },
    { name: "Julho/2024", collected: 64.809, total: 125.845 },
    { name: "Junho/2024", collected: 58.809, total: 125.845 },
    { name: "Maio/2024", collected: 58.609, total: 125.845 },
    { name: "Abril/2024", collected: 49.809, total: 125.845 },
  ]);
  const [dataCollected, setDataCollected] =useState([
    { name: "30/08/2024", collected: 75.809, total: 125.845 },
    { name: "17/08/2024", collected: 64.809, total: 125.845 },
    { name: "28/06/2024", collected: 58.809, total: 125.845 },
    { name: "17/06/2024", collected: 58.809, total: 125.845 },
    { name: "30/05/2024", collected: 58.609, total: 125.845 },
    { name: "17/05/2024", collected: 58.609, total: 125.845 },
    { name: "20/04/2024", collected: 49.809, total: 5.845 },
    { name: "10/04/2024", collected: 49.809, total: 1.845 },
    { name: "2/04/2024", collected: 49.809, total: 10.845 },
])

  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({ date: "", collected: "", total: "" });

  const handleAddData = () => {
    const parsedCollected = parseFloat(newData.collected);
    const parsedTotal = parseFloat(newData.total);

    if (newData.date && !isNaN(parsedCollected) && !isNaN(parsedTotal)) {
      setDataCollected([{ name: newData.date, collected: parsedCollected, total: parsedTotal }, ...dataGood]);
      setShowModal(false);
      setNewData({ date: "", collected: "", total: "" });
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  const taxaAdesaoUltimoMes = {
    name: "Setembro/2024", // provisorio
    adesao: "85.3%", // Exemplo de taxa de adesão
  };

  const residuosColetaSeletiva = {
    name: "Resíduos destinados à coleta seletiva em setembro",
    peso: "12,345 kg", // provisorio
  };

  const totalLixoGerado = {
    name: "Total de lixo gerado na região por mês",
    peso: "56,789 kg", // provisorio
  };

  // Estados para latitude, longitude e nome do município
  const [latitude, setLatitude] = useState<number>(-23.5505); // Padrão: São Paulo
  const [longitude, setLongitude] = useState<number>(-46.6333); // Padrão: São Paulo
  const [municipio, setMunicipio] = useState<string>('Carregando município...');

  const router = useRouter(); // Hook do Next.js para capturar parâmetros da URL

  useEffect(() => {
    // Captura os parâmetros de latitude e longitude da URL
    const queryParams = new URLSearchParams(window.location.search);
    const latitudeParam = queryParams.get('latitude');
    const longitudeParam = queryParams.get('longitude');

    // Atualiza os estados se os parâmetros existirem na URL
    if (latitudeParam && longitudeParam) {
      const lat = parseFloat(latitudeParam);
      const lng = parseFloat(longitudeParam);
      setLatitude(lat);
      setLongitude(lng);

      // Busca o nome do município usando a API de geocodificação
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      )
        .then(response => response.json())
        .then(data => {
          if (data && data.address && data.address.city) {
            setMunicipio(data.address.city);
          } else if (data && data.address && data.address.town) {
            setMunicipio(data.address.town);
          } else {
            setMunicipio("Município não encontrado");
          }
        })
        .catch(() => setMunicipio("Erro ao carregar município"));
    }
  }, [router]);

  return (
    <main className="flex justify-center">
      <aside>
        <SidebarProvider className="bg-[#F2F3F2] static absolute-top">
          <AppSidebar />
        </SidebarProvider>
      </aside>

      <div className="flex flex-col w-full p-2.5 gap-2 bg-[#B9C6BF]">
        <div className="flex flex-col w-full p-3.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2] justify-center">
          <div className="flex gap-5 items-center">
          <IoArrowBackCircleOutline 
  className='size-10 cursor-pointer' 
  onClick={() => router.push('/regioes')} 
/>
            <h1 className="text-lg font-semibold w-fit">
              {municipio}
            </h1>
            
          </div>
        </div>

        <div className="flex flex-col w-full h-fit p-2.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2]">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 w-full justify-center">
              <div className='flex-col'>
                <div>    <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Taxa de adesão seletiva - Último mês
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2.5 justify-center items-center">
                <h2 className="text-lg font-semibold">{taxaAdesaoUltimoMes.name}</h2>
                <p className="text-xl font-bold text-green-600">{taxaAdesaoUltimoMes.adesao}</p>
              </CardContent>
            </Card></div>

                <div className='flex' id='cardsParalelos'>
                  <div><Card className="bg-[#F2F3F2]">
                <CardHeader>
                  <CardTitle className="text-center">
                    {residuosColetaSeletiva.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2.5 justify-center items-center">
                  <p className="text-xl font-bold text-blue-600">{residuosColetaSeletiva.peso}</p>
                </CardContent>
              </Card></div>
                  <div>
                  <Card className="bg-[#F2F3F2]">
                <CardHeader>
                  <CardTitle className="text-center">
                    {totalLixoGerado.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2.5 justify-center items-center">
                  <p className="text-xl font-bold text-red-600">{totalLixoGerado.peso}</p>
                </CardContent>
                </Card>

                  </div>
                </div>
              </div>
              <article id="MAP" className="flex justify-center mt-2">
                <div id="map" className="border-2 w-[300px] h-72">
                  <MapComponent2 latitude={latitude} longitude={longitude} />
                </div>
              </article>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Card className="bg-[#F2F3F2]">
              <CardHeader>
              <CardTitle id='dados-da-coleta' className="text-center flex items-center justify-between">
                Dados de Coleta
                <button 
                  onClick={() => setShowModal(true)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  <GoPlusCircle />
                </button>
              </CardTitle>
              </CardHeader>
              <CardContent>
                {dataCollected.map((data, index) => (
                  <div key={index} className="flex justify-between border
                                    border-b p-2">
                    <span className="font-semibold">{data.name}</span>
                    <div className="flex gap-4">
                      <span>Coletados: {data.collected.toLocaleString()} kg</span>
                      <span>Total: {data.total.toLocaleString()} kg</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Taxa de adesão nos últimos meses
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

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="flex flex-col gap-4 p-4">
              <h2 className="text-lg font-bold">Adicionar Novo Dado</h2>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Mês/Ano</label>
                <input
                  type="text"
                  placeholder="Ex: 12/10/2024"
                  value={newData.date}
                  onChange={(e) => setNewData({ ...newData, date: e.target.value })}
                  className="border p-2 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Coletados (kg)</label>
                <input
                  type="number"
                  placeholder="Ex: 12345.67"
                  value={newData.collected}
                  onChange={(e) => setNewData({ ...newData, collected: e.target.value })}
                  className="border p-2 rounded-md bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Total (kg)</label>
                <input
                  type="number"
                  placeholder="Ex: 20000.00"
                  value={newData.total}
                  onChange={(e) => setNewData({ ...newData, total: e.target.value })}
                  className="border p-2 rounded-md bg-white"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddData}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </main>
  );
};

export default page;

