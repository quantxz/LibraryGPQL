import { Field, Int, ObjectType } from "@nestjs/graphql";
import { userObject } from "./user.object";

@ObjectType()
export class bookObject {
    @Field(() => Int, { nullable: true })
    id?: number
    @Field()
    author?: string
    @Field()
    title?: string
    @Field(() => Int, { nullable: true })
    chaptersNumber?: number
    @Field(() => userObject, { nullable: true })
    authorRelation?: userObject;
}