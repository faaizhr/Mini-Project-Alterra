import { gql } from "@apollo/client";

export const SubscriptionComic = gql `
subscription MySubscription {
    comics {
      content
      cover
      id
      penerbit
      penulis
      tahunTerbit
      title
      categories {
        genre {
          genre
          id
        }
      }
      ratings_aggregate {
        aggregate {
          avg {
            rating_value
          }
        }
      }
    }
  }
  `;