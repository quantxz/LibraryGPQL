import { Field, Int, ObjectType } from "@nestjs/graphql";
import { bookObject } from "./book.object";

@ObjectType()
export class chapterObject {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: true })
    chapterNumber?: number;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [bookObject], { nullable: true })
    book?: bookObject[];

}