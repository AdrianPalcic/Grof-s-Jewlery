export const GET_PRODUCTS = `query GetProducts($count: Int!) {
  products(first: $count) {
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
        images(first: 5) {
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
          availableForSale
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
`;
