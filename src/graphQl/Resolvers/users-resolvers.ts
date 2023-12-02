import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { userInput } from "../inputs/user.input";
import { PrismaService } from "src/prisma/prisma.service";
import { userObject } from "../objects/user.object";
import { bookObject } from "../objects/book.object";


@Resolver()
export class userResolver {

    @Query(() => userObject)
    async findUser(@Args('data') args: userInput) {
        try {
            const user = await PrismaService.user.findFirst({
                where: {
                    name: args.name
                }
            })

            const books = await PrismaService.book.findMany({
                where: {
                    author: args.name
                }
            })

            return {
                user,
                books
            };
        } catch(error) {
            console.log(error)
            throw new error
        }
    };

    @Mutation(() => userObject)
    async userCreationMutation(@Args('data') args: userInput) {
        try {
            const user = await PrismaService.user.create({
                data: {
                    name: args.name
                }
            })

            return user
        } catch(error) {
            console.log(error)
            throw new error
        }
    };

    @Mutation(() => userObject)
    async userNameUpdate(@Args('data') args: userInput) {
        try {
            const user = await PrismaService.user.update({
                data: {
                    name: args.name
                },
                where: {
                    id: args.id
                }
            })

            return user
        } catch(error) {
            console.log(error)
            throw new error
        }
    }
}