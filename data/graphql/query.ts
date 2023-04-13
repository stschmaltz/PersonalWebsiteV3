const queryTypeDefs = /* GraphQL */ `
  BlogEntry {
    id: ID!
    title: String!
    content: String!
  }
  
  type Query {
    blogEntries: [BlogEntry]
  }
`;

const queryResolver = {
  Query: {
    async blogEntries() {
      // TODO - implement
    },
  },
};

export { queryResolver, queryTypeDefs };
