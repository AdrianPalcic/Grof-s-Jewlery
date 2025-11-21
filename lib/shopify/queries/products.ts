export const GET_PRODUCTS = `query GetProducts($count: Int!) {
  products(first: $count, sortKey: CREATED_AT, reverse: true ) {
    edges {
    
      node {
        id
        updatedAt
        title
        handle
        productType 
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
