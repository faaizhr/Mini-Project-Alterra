import Navbar from "../Navbar/Navbar"
import useGetGenres from "../../hooks/useGetGenres"
import ListItemGenre from "./ListItemGenre"
import style from "./Genre.module.css"
import Footer from "../Footer/Footer"
import LoadingSvg from "../Comics/loadingSvg"

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
            <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
                <div className="container">
                <h1 className="display-4 mt-5">Genres</h1>
                <p className="lead"></p>
                </div>
            </div>
            { loading ? <LoadingSvg/> : ""}
            <div className={`container ${style.listGenre}`}>
                {data?.genre.map((genre) => <ListItemGenre key={genre.id} item={genre}/>)}
            </div>
            <Footer/>
        </div>
    )
}

export default ListGenre