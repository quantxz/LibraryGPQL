import { Args, Mutation, Query } from "@nestjs/graphql";
import { bookObject } from "../objects/book.object";
import { bookInput } from "../inputs/book.input";
import { PrismaService } from "src/prisma/prisma.service";

export class bookResolver {
    @Query(() => bookObject)
    async findBookByTitle(@Args('data') args: bookInput) {
        try {
            const book = await PrismaService.book.findFirst({
                where: {
                    title: args.title
                }
            })

            return book
        } catch(error) {
            console.log(error)
            throw new error
        }
    }

    @Query(() => bookObject)
    async findBookByAuthor(@Args('data') args: bookInput) {
        try {
            const book = await PrismaService.book.findFirst({
                where: {
                    author: args.author
                }
            })

            return book
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