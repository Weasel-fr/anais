"use server";
import type {Salle,Table} from "@prisma/client";
import prisma from "./prisma";

export interface SalleTables extends Salle {
    nonDisponibles: Table[];
  }

  export async function getSalle(): Promise<SalleTables | null> {

    const res = await prisma.salle.findFirst({
        include: {
            nonDisponibles: true,
          },
    });
    console.log(res);
    console.log("ici")
    return res;
  }
