import { gql } from '@apollo/client';

export const GetComics = gql `
query MyQuery {
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

export const GetComicsLatest = gql `
query MyQuery {
  comics(limit: 4, order_by: {tahunTerbit: desc}) {
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

export const GetGenres = gql `
query MyQuery {
  genre(order_by: {genre: asc}) {
    genre
    id
    categories {
      comic {
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
  }
}

`;

export const GetComicsBest = gql `
query MyQuery {
  comics(limit: 4, order_by: {ratings_aggregate: {avg: {rating_value: desc_nulls_last}}}) {
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

export const GetRelatedComics = gql `
query MyQuery($_eq: String!) {
  comics(where: {penulis: {_eq: $_eq}}) {
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

