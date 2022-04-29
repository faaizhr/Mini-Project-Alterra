import { useQuery } from "@apollo/client";
import { GetComicsLatest } from "../graphql/query";

export default function useGetComicLatest() {
    const {data, loading, error} = useQuery(GetComicsLatest);
    console.log("data latest", data)

    return {
        data,
        loading,
        error
    }
}