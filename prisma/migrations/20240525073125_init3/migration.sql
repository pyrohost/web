/*
  Warnings:

  - You are about to drop the column `interval` on the `Price` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Price" DROP COLUMN "interval",
ADD COLUMN     "every_months" INTEGER;
