/*
  Warnings:

  - You are about to drop the column `chaptersTitle` on the `book` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chaptersNumber" INTEGER NOT NULL,
    CONSTRAINT "book_author_fkey" FOREIGN KEY ("author") REFERENCES "user" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_book" ("author", "chaptersNumber", "id", "title") SELECT "author", "chaptersNumber", "id", "title" FROM "book";
DROP TABLE "book";
ALTER TABLE "new_book" RENAME TO "book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
