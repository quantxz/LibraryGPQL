import { Args, Mutation, Query } from "@nestjs/graphql";
import { bookObject } from "../objects/book.object";
import { bookInput } from "../inputs/book.input";
import { PrismaService } from "src/prisma/prisma.service";

export class bookResolver {
    //arrumar
    @Query(() => [bookObject])
    async findBooksByTitle(@Args('data') args: bookInput) {
        try {
            const book = await PrismaService.book.findMany({
                where: {
                    title: args.title
                }
            })
           
            const chapter = await PrismaService.chapter.findMany({
                where: {
                    bookTitle: args.title
                }
            })
            
            return {
                book,
                chapter
            }
        } catch(error) {
            console.log(error)
            throw new error
        }
    }

    @Query(() => bookObject)
    async findBookByAuthor(@Args('data') args: bookInput) {
        try {
            const books = await PrismaService.book.findMany({
                where: {
                    author: args.author
                }
            })
            const book = books[2];

            const chapter = await PrismaService.chapter.findMany({
                where: {
                    bookTitle: book?.title
                }
            })
            
            return {
                ...books,
                chapter
            }
        } catch(error) {
            console.log(error)
            throw new error
        }
    }

    @Mutation(() => bookObject)
    async bookCreationMutation(@Args('data') args: bookInput) {
            try {
                const book = await PrismaService.book.create({
                    data: {
                        author: args.author,
                        title: args.title,
                        chaptersNumber: args.chaptersNumber
                    }
                })

                return book
            }  catch(error) {
                console.log(error)
                throw error
            } 
    }
}