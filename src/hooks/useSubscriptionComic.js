import { useSubscription } from "@apollo/client";
import { SubscriptionComic } from "../graphql/subscription";

export default function useSubscriptionComic() {
    const {data, loading, error} = useSubscription(SubscriptionComic);
    console.log("hook", data)

    return {
        data, 
        loading, 
        error
    }
}