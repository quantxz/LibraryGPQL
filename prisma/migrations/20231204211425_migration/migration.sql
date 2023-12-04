-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chaptersNumber" INTEGER NOT NULL,
    CONSTRAINT "book_author_fkey" FOREIGN KEY ("author") REFERENCES "user" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chapterNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "bookTitle" TEXT NOT NULL,
    CONSTRAINT "chapter_bookTitle_fkey" FOREIGN KEY ("bookTitle") REFERENCES "book" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_title_key" ON "book"("title");
