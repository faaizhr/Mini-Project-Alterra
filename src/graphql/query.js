import { gql } from '@apollo/client';

export const GetComics = gql `
query MyQuery {
  comics {
    title
    tahunTerbit
    penulis
    penerbit
    id
    categories {
      genre {
        genre
      }
    }
    content
    cover
  }
}
`;

export const GetComicsLatest = gql `
query MyQuery {
  comics(limit: 4, order_by: {tahunTerbit: desc}) {
    title
    tahunTerbit
    penulis
    penerbit
    id
    categories {
      genre {
        genre
      }
    }
    content
    cover
  }
}
`;

export const GetGenres = gql `
query MyQuery {
  genre {
    genre
    id
    categories {
      comic {
        id
        penerbit
        penulis
        tahunTerbit
        title
        content
        cover
        categories {
          genre {
            genre
            id
          }
        }
      }
    }
  }
}

`;

