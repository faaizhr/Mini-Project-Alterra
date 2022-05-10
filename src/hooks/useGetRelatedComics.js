import { useQuery, useLazyQuery } from "@apollo/client";
import { GetRelatedComics } from "../graphql/query";

export default function useGetRelatedComics() {
    const [getRelatedComics, {data, loading, error}] = useLazyQuery(GetRelatedComics);
    console.log("related comics", data)

    return {
        getRelatedComics,
        data, 
        loading, 
        error
    }
}