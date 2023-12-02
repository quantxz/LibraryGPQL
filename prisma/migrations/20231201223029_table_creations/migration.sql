-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "book" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chaptersNumber" INTEGER NOT NULL,
    "chaptersTitle" TEXT NOT NULL,
    CONSTRAINT "book_author_fkey" FOREIGN KEY ("author") REFERENCES "user" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chapterNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,
    CONSTRAINT "chapter_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_book_key" ON "user"("book");

-- CreateIndex
CREATE UNIQUE INDEX "book_chaptersNumber_key" ON "book"("chaptersNumber");

-- CreateIndex
CREATE UNIQUE INDEX "book_chaptersTitle_key" ON "book"("chaptersTitle");
