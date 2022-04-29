import { useQuery } from "@apollo/client";
import { GetComics } from "../graphql/query";

export default function useGetComic() {
    const {data, loading, error} = useQuery(GetComics);
    console.log("hook", data)

    return {
        data, 
        loading, 
        error
    }
}
