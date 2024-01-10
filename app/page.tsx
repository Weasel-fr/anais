import type { Salle, Table } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function Home() {
  interface SalleTables extends Salle {
    nonDisponibles: Table[];
  }

  let salle: SalleTables | null = await prisma.salle.findFirst({
    include: {
      nonDisponibles: true,
    },
  });

  console.log(salle);
  return (
    <div>
      <table className="border-separate border-spacing-2">
        {Array.from({ length: salle!.rangees }, (_, rangee) => (
          <tr key={rangee}>
            {Array.from({ length: salle!.tables }, (_, table) => (
              <td key={table} className={`w-50 h-20 ${salle!.nonDisponibles.some(t => t.numero === rangee*salle!.tables+table+1) ? "bg-red":"bg-primary"}`}>
                Fabien Vallet
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
