-- CreateTable
CREATE TABLE "Salle" (
    "salleId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" TEXT NOT NULL,
    "rangees" INTEGER NOT NULL,
    "tables" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Table" (
    "tableId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "salleId" INTEGER NOT NULL,
    CONSTRAINT "Table_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES "Salle" ("salleId") ON DELETE RESTRICT ON UPDATE CASCADE
);
