import {useNavigate} from "react-router-dom"
// import style from './Comic.module.css'
import ListItem from "../Comics/ListItem"

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
        <div>
            <p onClick={() => handleDetail(item.id)}>{genre}</p>
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