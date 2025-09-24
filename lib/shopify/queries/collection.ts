export const GET_ALL_COLLECTIONS = `
query getAllCollections($first: Int!) {
  collections(first: $first) {
    edges {
      node {
        id
        title
        handle
        description
        image {
          url
          altText
        }
      }
    }
  }
}
`;
