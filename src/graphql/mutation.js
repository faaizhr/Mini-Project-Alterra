import { gql } from "@apollo/client";

export const InsertRating = gql `
mutation MyMutation($comic_id: Int!, $rating_value: Int!) {
    insert_rating(objects: {comic_id: $comic_id, rating_value: $rating_value}) {
      affected_rows
    }
  }
`;