import { useQuery } from "@apollo/client";
import { GetComicsBest } from "../graphql/query";

export default function useGetComicBest() {
    const {data, loading, error} = useQuery(GetComicsBest);
    console.log("data best di graphql", data)

    return {
        data,
        loading,
        error
    }
}