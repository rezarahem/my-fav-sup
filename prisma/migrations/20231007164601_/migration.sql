-- AlterTable
ALTER TABLE "Hero" ADD COLUMN     "listId" INTEGER;

-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
