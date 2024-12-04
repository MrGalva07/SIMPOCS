'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importar o hook correto para o diretório app

import cityCoordinates from '@/app/cityCoordinates.json'; 
import MapComponent from '@/components/MapComponent';


type IBGEUFResponse = {
  sigla: string;
  nome: string;
};

type IBGECITYResponse = {
  id: number;
  nome: string;
  latitude?: number; 
  longitude?: number;
};

const SelectPage = () => {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [latitude, setLatitude] = useState<number>(-23.5505); // Default: São Paulo
  const [longitude, setLongitude] = useState<number>(-46.6333); // Default: São Paulo

  const router = useRouter();

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const citiesWithCoordinates = response.data.map((city: any) => {
          const coordinates = cityCoordinates.find(
            (c) => c.nome.toLowerCase() === city.nome.toLowerCase()
          );
          return {
            id: city.id,
            nome: city.nome,
            latitude: coordinates?.lat || 0,
            longitude: coordinates?.lng || 0,
          };
        });
        setCities(citiesWithCoordinates);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
    setSelectedCity('0'); // Resetar a cidade ao alterar a UF
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleNavigate() {
    if (selectedCity !== '0') {
      const selectedCityData = cities.find((city) => city.nome === selectedCity);
      if (selectedCityData) {
        const latitude = selectedCityData.latitude ?? -23.5505; // Fallback para São Paulo
        const longitude = selectedCityData.longitude ?? -46.6333; // Fallback para São Paulo
        // Navegar para a página de Home com as coordenadas como parâmetros
        router.push(`/regioes/regiaoSelecionada?latitude=${latitude}&longitude=${longitude}`);
      }
    }
  }

  return (
    <main className="flex justify-center items-center bg-gray-800 ">
      <aside>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </aside>

      <section className="flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold text-white mb-4">
          Seletor de UF e Cidade
        </h1>

        <div className="flex flex-col space-y-4">
          <select
            name="uf"
            id="uf"
            onChange={handleSelectUf}
            className="border border-gray-300 rounded-lg p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0">Selecione uma UF</option>
            {ufs.map((uf) => (
              <option key={uf.sigla} value={uf.sigla}>
                {uf.nome}
              </option>
            ))}
          </select>

          <select
            name="city"
            id="city"
            value={selectedCity}
            onChange={handleSelectCity}
            className="border border-gray-300 rounded-lg p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0">Selecione uma cidade</option>
            {cities.map((city) => (
              <option key={city.id} value={city.nome}>
                {city.nome}
              </option>
            ))}
          </select>

          <button
            onClick={handleNavigate}
            disabled={selectedCity === '0'}
            className={`px-4 py-2 rounded text-white ${
              selectedCity === '0'
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Ir para
          </button>
        </div>
      </section>
    </main>
  );
};

export default SelectPage;