/*
  Warnings:

  - You are about to drop the column `stripePriceId` on the `Server` table. All the data in the column will be lost.
  - Made the column `stripeSubscriptionId` on table `Server` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Server" DROP COLUMN "stripePriceId";

-- Update
UPDATE "Server" SET "stripeSubscriptionId" = '' WHERE "stripeSubscriptionId" IS NULL;

-- AlterColumn
ALTER TABLE "Server" ALTER COLUMN "stripeSubscriptionId" SET NOT NULL;