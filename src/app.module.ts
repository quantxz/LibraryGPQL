import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { userResolver } from './graphQl/Resolvers/users-resolvers';
import { bookResolver } from './graphQl/Resolvers/books.resolvers';
import { chaptersResolver } from './graphQl/Resolvers/chapters.resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  providers: [userResolver, bookResolver, chaptersResolver]
})
export class AppModule {}
