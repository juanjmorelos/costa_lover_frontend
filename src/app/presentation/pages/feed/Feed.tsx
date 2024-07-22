import { user } from "../../../infrastructure/entities/user.entity";
import { useFeed } from "../../hooks/useFeed";
import { useLocalStorageStore } from "../../stores/useLocalStorage";
import { Poster } from "./components/Poster";

export const Feed = () => {
    const { isLoading, message, feed, success } = useFeed()
    const storedItem  = useLocalStorageStore(state => state.storedItem) 
    const getStore  = useLocalStorageStore(state => state.getStoredValue) 
    getStore("user")
    let user: user | undefined = undefined
    if(storedItem) {
        user = JSON.parse(storedItem ?? '')
    }
    
    return (
        <div className="bg-gray-100 w-full h-full py-4">
            {
                feed && feed.map((post) => {
                    return (
                        <Poster post={post} currentUser={user!}/>
                    )
                })
            }
        </div>
    )
}
