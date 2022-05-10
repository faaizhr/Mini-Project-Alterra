import {useNavigate} from "react-router-dom"
// import style from './Comic.module.css'
import ListItem from "../Comics/ListItem"
import style from "./Genre.module.css"

const ListItemGenre = ({item}) => {

    // console.log("cek id", item.id)

    const { id, genre, categories } = item
    console.log("cek kategori di genre", id, categories)

    const navigate = useNavigate()
    
    const handleDetail = () => {
        navigate(`/genres/${item.id}`, {
            state: {
                id: item.id, 
                genre: genre,
                categories: categories
            }
        })
    }
    // console.log("item", item)
    
    return (
        <div className={style.listItemGenre} onClick={() => handleDetail(item.id)}>
            <div class="row justify-content-between">
                <div class="col-11">
                <p className="ms-3 align-middle" >{genre}</p>
                </div>
                <div class="col-1">
                <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    )
    
    
    
    // return (
    //     <div>
    //         <p>{item.title}</p>
    //         <p>{item.penulis}</p>
    //         <p>{item.penerbit}</p>
    //         <p>{item.tahunTerbit}</p>
    //     </div>
    // )
}

export default ListItemGenre