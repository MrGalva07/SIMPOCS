import { Progress } from "@/components/ui/progress";
import { Report } from "../page";
import { cn } from "@/lib/utils";

interface CardProps {
  report: Report;
}

export function CardAdesao({ report }: CardProps) {
  let percentage = (report.collected / report.total) * 100;
  percentage = Math.min(percentage, 100);
  let color = "bg-green-500";
  if (percentage <= 20) color = "bg-red-500";
  else if (percentage <= 50) color = "bg-orange-500";

  return (
    <div className="flex flex-col w-full p-2.5 shadow-md rounded-lg gap-2 overflow-hidden bg-[#F2F3F2]">
      <div className="flex justify-between">
        <p className="font-semibold underline">{report.name}</p>
        <p className="font-medium">{report.collected} kg</p>
      </div>
      <div className="flex justify-between gap-2.5 items-center">
        <p className="font-semibold text-nowrap">{percentage.toFixed(1)}%</p>
        <div className="w-full h-3 bg-primary/20 rounded-full overflow-hidden">
          <div
            className={cn("h-full", color)}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-nowrap text-sm font-medium text-gray-400">
          Total: {report.total} kg
        </p>
      </div>
    </div>
  );
}
