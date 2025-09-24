export const GET_COLLECTION_PRODUCTS = `query GetCollectionProducts($handle: String!, $first: Int!) {
  collection(handle: $handle) {
    id
    title
    handle
    description
    image {
      url
      altText
    }
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
          }
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {          
            edges {
              node {
                id                         
                title
               priceV2 {
        amount
        currencyCode
      }
              }
            }
          }
        }
      }
    }
  }
}
`;
