import Navbar from "../Navbar"
import useGetGenres from "../../hooks/useGetGenres"
import ListItemGenre from "./ListItemGenre"

function ListGenre() {
    
    const {data, loading, error} = useGetGenres()
    console.log("data genre", data)

    // console.log("Cek Genre", data.comics[6].categories[1].genre.genre)

    // const navigate = useNavigate()
    // const handleDetail = () => {
    //     navigate(`/detail-comic/${data.comics.id}`);
    // }

    // console.log("cek id", data.comics)

    return(
        <div>
            <Navbar/>
            <div className="container">
                <h3>List Genres</h3>
                {data?.genre.map((genre) => <ListItemGenre key={genre.id} item={genre}/>)}
            </div>
        </div>
    )
}

export default ListGenre