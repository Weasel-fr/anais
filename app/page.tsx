"use client";

import type { Salle, Table } from "@prisma/client";
import prisma from "@/lib/prisma";
import { getSalle } from "@/lib/salles";
import type { SalleTables } from "@/lib/salles";
import { useEffect, useState } from "react";

export default function Home() {
  // interface SalleTables extends Salle {
  //   nonDisponibles: Table[];
  // }

  // let salle: SalleTables | null = await prisma.salle.findFirst({
  //   include: {
  //     nonDisponibles: true,
  //   },
  // });

  // const sections[0] = ["Monsieur A", "Monsieur B", "Monsieur C", "Monsieur D", "Monsieur E", "Monsieur F", "Monsieur G"];
  // const section2 = ["Mme A", "Mme B", "Mme C", "Mme D", "Mme E"];
  // const section3 = ["Melle A", "Melle B", "Melle C", "Melle D"];
  const [salle, setSalle] = useState<SalleTables>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const s = await getSalle();
      setSalle(s!);
      console.log(s);
    }
     load();
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {isLoaded ? 
      (
        <table className="border-separate border-spacing-2">
          <thead> </thead>
          <tbody>
            {Array.from({ length: salle!.rangees }, (_, rangee) => (
              <tr key={rangee}>
                {Array.from({ length: salle!.tables }, (_, table) => (
                  <td
                    key={table}
                    className={`w-50 h-20 ${
                      salle!.nonDisponibles.some(
                        (t) => t.numero === rangee * salle!.tables + table + 1
                      )
                        ? "bg-red-600"
                        : ""
                    }`}
                  >
                    Fabien Vallet
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
      
       : (
        "chargement"
      )}
    </div>
  );
}
