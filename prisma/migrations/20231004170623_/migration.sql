/*
  Warnings:

  - You are about to drop the `sup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sup";

-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "supName" TEXT NOT NULL,
    "sumImage" TEXT NOT NULL,
    "listId" INTEGER,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
