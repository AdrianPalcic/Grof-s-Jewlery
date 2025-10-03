export const GET_PRODUCT_BY_HANDLE = `query GetProductByHandle($handle: String!) {
  product(handle: $handle) {
    id
    title
    handle
    productType 
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
`;
