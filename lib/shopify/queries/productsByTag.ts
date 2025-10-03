export const GET_PRODUCTS_BY_TAG = `query GetProductsByTag($tag: String!, $first: Int!) {
  products(first: $first, query: $tag) {
    edges {
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
  }
}
`;
