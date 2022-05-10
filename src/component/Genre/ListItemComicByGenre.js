import {useNavigate} from "react-router-dom"
import style from '../Comics/Comic.module.css'

const ListItemComicByGenre = ({item}) => {

    // console.log("cek id", item.id)

    console.log("ListItemComicByGenre", item.comic.id)
    const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories, ratings_aggregate } = item.comic

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
                categories: categories,
                ratings_aggregate: ratings_aggregate
            }
        })
    }
    console.log("item", item)
    
    let fixRating = ratings_aggregate.aggregate.avg.rating_value;
    let avgRating = fixRating.toFixed(2);
    
    console.log("pembulatan rating", avgRating)
    
    return (
      <div className={style.comicItem}>
        <div className={`card ${style.cardListCustom}`} style={{width: '16rem'}}>
          <img src={cover} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" onClick={() => handleDetail(item.id)}>{title}</h5>
            <div className="text-right">
              <p className="card-text me-2">{avgRating}/5</p>
              <i class="bi bi-star-fill"></i>
            </div>
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