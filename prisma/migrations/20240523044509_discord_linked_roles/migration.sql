/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "discordLinkedRoleId" TEXT;

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "DiscordLinkedRole" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscordLinkedRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_discordLinkedRoleId_fkey" FOREIGN KEY ("discordLinkedRoleId") REFERENCES "DiscordLinkedRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
