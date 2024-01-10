import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Suppression des données existantes
    await prisma.salle.deleteMany();
    await prisma.table.deleteMany();

    // Création des salles
    const salle_1 = await prisma.salle.create({
        data: {
            numero: "105",
            rangees: 6,
            tables: 6            
        },
    });

    // Création des tables
    const table_1 = await prisma.table.create({
        data: {
            numero: 4,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_2 = await prisma.table.create({
        data: {
            numero: 10,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_3 = await prisma.table.create({
        data: {
            numero: 16,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_4 = await prisma.table.create({
        data: {
            numero: 22,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_5 = await prisma.table.create({
        data: {
            numero: 28,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_6 = await prisma.table.create({
        data: {
            numero: 29,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_7 = await prisma.table.create({
        data: {
            numero: 30,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_8 = await prisma.table.create({
        data: {
            numero: 34,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_9 = await prisma.table.create({
        data: {
            numero: 35,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
    const table_10 = await prisma.table.create({
        data: {
            numero: 36,
            salle: {
                connect: {
                    salleId: salle_1.salleId,
                },
            },
        },
    });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
