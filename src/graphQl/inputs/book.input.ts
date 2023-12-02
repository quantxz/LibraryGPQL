import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class bookInput {
    @Field(() => Int, { nullable: true })
    id?: number
    @Field(() => String, { nullable: true })
    author?: string
    @Field(() => String, { nullable: true })
    title?: string
    @Field(() => Int, { nullable: true })
    chaptersNumber?: number
}