import { useQuery } from "@apollo/client";
import { GetComicsLatest } from "../graphql/query";

export default function useGetComicLatest() {
    const {data, loading, error} = useQuery(GetComicsLatest);
    console.log("data latest di graphql", data)

    return {
        data,
        loading,
        error
    }
}