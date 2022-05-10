import { useMutation } from "@apollo/client";
import { GetComics } from "../graphql/query";
import { InsertRating } from "../graphql/mutation";

export default function useInsertRating() {
    const [insertRating, {loading: loadingInsertRating}] = useMutation(InsertRating, {refetchQueries: GetComics});

    return {
        insertRating,
        loadingInsertRating
    }
}