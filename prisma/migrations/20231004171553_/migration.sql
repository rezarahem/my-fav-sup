/*
  Warnings:

  - You are about to drop the column `listId` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the `List` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_listId_fkey";

-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "listId";

-- DropTable
DROP TABLE "List";
