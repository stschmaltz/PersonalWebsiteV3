import { queryResolver, queryTypeDefs } from './query';

const typeDefs = [queryTypeDefs];
const resolvers = [queryResolver];

export { typeDefs, resolvers };
