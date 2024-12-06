import { AppSidebar } from "@/components/ui/app-sidebar";
import {

  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import { CardAdesao } from "./_components/card";
import { Download } from "lucide-react";

export type Report = {
  name: string;
  collected: number;
  total: number;
};

const Page = () => {
  const dataBad: Report[] = [
    { name: "Boa Viagem", collected: 12345, total: 45000 },
    { name: "Casa Forte", collected: 8910, total: 40000 },
    { name: "Pina", collected: 10000, total: 42000 },
    { name: "Espinheiro", collected: 6750, total: 38000 },
    { name: "Tamarineira", collected: 5500, total: 35000 },
    { name: "Graças", collected: 9120, total: 46000 },
    { name: "Aflitos", collected: 7430, total: 39000 },
    { name: "Cordeiro", collected: 4230, total: 30000 },
    { name: "São José", collected: 11100, total: 48000 },
    { name: "Ibura", collected: 8400, total: 41500 },
    { name: "Boa Vista", collected: 6650, total: 37000 },
    { name: "Setúbal", collected: 9800, total: 44000 },
    { name: "Jardim São Paulo", collected: 5200, total: 32000 },
    { name: "Várzea", collected: 7900, total: 40000 },
    { name: "Macaxeira", collected: 6400, total: 36000 },
    { name: "Iputinga", collected: 8000, total: 43000 },
    { name: "Santo Amaro", collected: 7600, total: 38500 },
    { name: "Bairro do Recife", collected: 13250, total: 50000 },
    { name: "Afogados", collected: 9450, total: 42500 },
    { name: "Cavaleiro", collected: 10300, total: 45000 },
  ];
  const dataGood = [
    { name: "Jaboatão dos Guararapes", collected: 42000, total: 45000 },
    { name: "Olinda", collected: 37200, total: 40000 },
    { name: "Paulista", collected: 39800, total: 43000 },
    { name: "Camaragibe", collected: 33100, total: 38000 },
    { name: "Caruaru", collected: 34500, total: 39000 },
    { name: "Garanhuns", collected: 41200, total: 46000 },
    { name: "Petrolina", collected: 38000, total: 42000 },
    { name: "Cabo de Santo Agostinho", collected: 30600, total: 35000 },
    { name: "Vitória de Santo Antão", collected: 45000, total: 48000 },
    { name: "Santa Cruz do Capibaribe", collected: 40500, total: 44000 },
    { name: "Igarassu", collected: 35400, total: 37500 },
    { name: "Surubim", collected: 41800, total: 43000 },
    { name: "Ribeirão", collected: 29200, total: 32000 },
    { name: "Belo Jardim", collected: 38500, total: 40000 },
    { name: "Toritama", collected: 31700, total: 35000 },
    { name: "Limoeiro", collected: 34100, total: 36000 },
    { name: "Águas Belas", collected: 37800, total: 41000 },
    { name: "São Lourenço da Mata", collected: 39200, total: 42000 },
    { name: "Escada", collected: 35000, total: 38000 },
    { name: "Arcoverde", collected: 30800, total: 33500 },
  ];

  return (
    <main className="flex justify-center">
      <aside>
        <SidebarProvider className="bg-[#F2F3F2] static absolute-top">
          <AppSidebar />
          <SidebarTrigger />
          <main></main>
        </SidebarProvider>
      </aside>

      <div className="flex flex-col w-full p-2.5 gap-2 bg-[#B9C6BF]">
        <div className="flex flex-col w-full h-fit p-3.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2]">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold w-fit">
              Relatórios de Taxa de Adesão da Coleta Seletiva nas Regiões
            </h1>
            <Button variant="ghost">
              <Download size={4} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit p-2.5 border shadow-sm rounded-xl gap-2 overflow-hidden bg-[#F2F3F2]">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 w-full justify-end">
              <div className="flex items-center gap-2 mr-auto">
                <h1 className="text-sm font-semibold w-fit">Município:</h1>
                <select
                  value={12}
                  className="text-sm p-2 border rounded-md bg-[#F2F3F2]"
                >
                  <option className="text-sm">Recife</option>
                  <option className="text-sm">Olinda</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold w-fit">Ano:</h1>
                <select
                  value={2024}
                  className="text-sm p-2 border rounded-md bg-[#F2F3F2]"
                >
                  <option className="text-sm">2024</option>
                  <option className="text-sm">2023</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold w-fit">Mês:</h1>
                <select
                  value={"Dezembro"}
                  className="text-sm p-2 border rounded-md bg-[#F2F3F2]"
                >
                  <option className="text-sm">Setembro</option>
                  <option className="text-sm">Outubro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Menor Taxa de Adesão
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2.5">
                {dataBad.map((report, key) => (
                  <CardAdesao report={report} key={key}></CardAdesao>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#F2F3F2]">
              <CardHeader>
                <CardTitle className="text-center">
                  Maior Taxa de Adesão
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
