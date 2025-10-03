export const GET_PRODUCTS_BY_TAG_W_CURSOR = `
  query GetProductsByTagWithCursor($tag: String!, $first: Int!, $after: String) {
    products(first: $first, query: $tag, after: $after) {
      edges {
        cursor
        node {
          id
          title
          handle
          productType 
          featuredImage { 
            url 
            altText 
          }
          images(first: 10) { 
            edges { node { url altText } } 
          }
          priceRange { 
            minVariantPrice { 
              amount 
              currencyCode 
            } 
          }
          availableForSale
          tags
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
      pageInfo {
        hasNextPage
      }
    }
  }
`;
