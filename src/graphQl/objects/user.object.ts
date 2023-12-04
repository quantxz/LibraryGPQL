import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { bookObject } from "./book.object";

@ObjectType()
export class userObject {
    @Field(() => Int, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    name?: string
    
    @Field(() => [bookObject], { nullable: true })
    books?: bookObject[];
}