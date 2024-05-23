/*
  Warnings:

  - You are about to drop the column `discordLinkedRoleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `DiscordLinkedRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DiscordLinkedRole" DROP CONSTRAINT "DiscordLinkedRole_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "discordLinkedRoleId";

-- DropTable
DROP TABLE "DiscordLinkedRole";

-- CreateTable
CREATE TABLE "DiscordTokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscordTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordTokens_userId_key" ON "DiscordTokens"("userId");

-- AddForeignKey
ALTER TABLE "DiscordTokens" ADD CONSTRAINT "DiscordTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
