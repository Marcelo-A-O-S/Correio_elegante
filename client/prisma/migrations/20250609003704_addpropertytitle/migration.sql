/*
  Warnings:

  - Added the required column `title` to the `Carta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carta" ADD COLUMN     "title" TEXT NOT NULL;
