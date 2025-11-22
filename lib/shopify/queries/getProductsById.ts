export const GET_PRODUCTS_BY_ID = `
query getProducts($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Product {
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
`;
