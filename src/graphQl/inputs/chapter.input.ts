import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class chapterInput {
    @Field({ nullable: true })
    id:     number

    @Field({ nullable: true })
    chapterNumber: number

    @Field({ nullable: true })
    title:  string
    
    @Field(() => String, { nullable: true })
    bookTitle: string
}