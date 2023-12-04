/*
model Chapter {
  id              Int     @default(autoincrement()) @id
  chapterNumber   Int
  title           String  

  bookId          Int
  book            Book    @relation(fields: [bookId], references: [id])

  @@map("chapter")
}
*/

import { Args, Mutation, Query } from "@nestjs/graphql";
import { chapterObject } from "../objects/chapter.object";
import { chapterInput } from "../inputs/chapter.input";
import { PrismaService } from "src/prisma/prisma.service";

export class chaptersResolver {
    @Query(() => chapterObject)
    async findChaptersByTitle(@Args('data') args: chapterInput) {
        try {
            const chapter = await PrismaService.chapter.findMany({
                where: {
                    title: args.title
                }
            })

            const chapters = chapter[3]

            const book = await PrismaService.book.findMany({
                where: {
                    title: chapters?.bookTitle
                }
            })

            return {
                ...chapter[0],
                book
            }

        } catch(error) {
            console.log(error)
            throw new error
        }
    }

    @Mutation(() => chapterObject)
    async chapterCreationMutation(@Args('data') args: chapterInput) {
        try {
            const chapter = await PrismaService.chapter.create({
                data: {
                    title: args.title,
                    chapterNumber: args.chapterNumber,
                    bookTitle: args.bookTitle
                }
            })

            const book = await PrismaService.book.findMany({
                where: {
                    title: args.bookTitle
                }
            })

            return {
                ...chapter,
                book
            }

        } catch(error) {
            console.log(error)
            throw new Error(error);
        }
    }
}