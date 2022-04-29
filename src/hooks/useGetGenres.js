import { useQuery } from "@apollo/client";
import { GetGenres } from "../graphql/query";

export default function useGetGenres() {
    const {data, loading, error} = useQuery(GetGenres);
    console.log("hook", data)

    return {
        data, 
        loading, 
        error
    }
}
