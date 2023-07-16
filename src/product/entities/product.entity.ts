import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { defaultValue: 0 })
  id: number;
  @Field()
  description: string;
  @Field()
  price: number;
  @Field()
  image: string;
  @Field()
  brand: string;
  @Field()
  createAt: Date;
  @Field()
  updateAt: Date;
}
