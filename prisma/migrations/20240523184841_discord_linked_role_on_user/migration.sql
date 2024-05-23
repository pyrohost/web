/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `DiscordLinkedRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `DiscordLinkedRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_discordLinkedRoleId_fkey";

-- AlterTable
ALTER TABLE "DiscordLinkedRole" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DiscordLinkedRole_userId_key" ON "DiscordLinkedRole"("userId");

-- AddForeignKey
ALTER TABLE "DiscordLinkedRole" ADD CONSTRAINT "DiscordLinkedRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
