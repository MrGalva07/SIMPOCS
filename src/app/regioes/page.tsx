'use client';

import React, { useEffect, useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import axios from 'axios';
import { Autocomplete, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { useRouter } from 'next/navigation'; 

import cityCoordinates from '@/app/cityCoordinates.json';


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

// Criar tema personalizado para o Material-UI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e90ff', 
    },
    background: {
      default: '#1f2937', 
      paper: '#374151', 
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa', 
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#374151', 
        },
        input: {
          color: '#ffffff',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: '#ffffff', 
        },
        paper: {
          backgroundColor: '#374151', 
          color: '#ffffff', 
        },
      },
    },
  },
});

const SelectPage = () => {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState<IBGEUFResponse | null>(null);
  const [selectedCity, setSelectedCity] = useState<IBGECITYResponse | null>(null);


  const router = useRouter();

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((response) => {
        setUfs(response.data);
      })
      .catch((error) => console.error('Erro ao buscar UFs:', error));
  }, []);

  useEffect(() => {
    if (!selectedUf) {
      setCities([]);
      return;
    }

    axios
      .get<IBGECITYResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.sigla}/municipios`
      )
      .then((response) => {
        const citiesWithCoordinates = response.data.map((city) => {
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
      })
      .catch((error) => console.error('Erro ao buscar cidades:', error));
  }, [selectedUf]);

  function handleNavigate() {
    if (selectedCity) {
      const latitude = selectedCity.latitude ?? -23.5505; // Default latitude
      const longitude = selectedCity.longitude ?? -46.6333; // Default longitude
      router.push(
        `/regioes/regiaoSelecionada?latitude=${latitude}&longitude=${longitude}`
      );
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <main className="flex justify-center items-center bottom-0 bg-gray-700" >
    
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
            {/* Autocomplete para UF */}
            <Autocomplete
              options={ufs}
              getOptionLabel={(option) => option.nome}
              value={selectedUf}
              onChange={(event, newValue) => {
                setSelectedUf(newValue);
                setSelectedCity(null); // Limpa a cidade quando a UF muda
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="UF"
                  variant="outlined"
                  className="w-72" // Largura fixa
                  required
                />
              )}
            />

            {/* Autocomplete para Cidade */}
            <Autocomplete
              options={cities}
              getOptionLabel={(option) => option.nome}
              value={selectedCity}
              onChange={(event, newValue) => setSelectedCity(newValue)}
              disabled={!selectedUf}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cidade"
                  variant="outlined"
                  className="w-72" 
                  required
                />
              )}
            />

            <Button
              onClick={handleNavigate}
              disabled={!selectedCity}
              variant="contained"
              color="primary"
              className="w-full"
            >
              Ir para
            </Button>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default SelectPage;
