import {useNavigate} from "react-router-dom"
import style from '../Comics/Comic.module.css'

const ListItemComicByGenre = ({item}) => {

    // console.log("cek id", item.id)

    console.log("ListItemComicByGenre", item.comic.id)
    const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories } = item.comic

    const navigate = useNavigate()
    
    const handleDetail = () => {
        navigate(`/comics/${id}`, {
            state: {
                id: id, 
                title: title,
                penulis: penulis,
                penerbit: penerbit,
                tahunTerbit: tahunTerbit,
                cover: cover,
                content: content,
                categories: categories
            }
        })
    }
    // console.log("item", item)
    
    return (
      <div className={style.comicItem}>
        <div className="card" style={{width: '18rem'}}>
          <img src={cover} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" onClick={() => handleDetail(id)}>{title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            {/* <li className="list-group-item">{item.id}</li> */}
            {/* <li className="list-group-item">{penulis}</li>
            <li className="list-group-item">{penerbit}</li>
            <li className="list-group-item">{tahunTerbit}</li> */}
          </ul>
        </div>
      </div>
    )
    
    
    
    // return (
    //     <div>
    //         <p>{title}</p>
    //         <p>{penulis}</p>
    //         <p>{penerbit}</p>
    //         <p>{tahunTerbit}</p>
    //     </div>
    // )
}

export default ListItemComicByGenre