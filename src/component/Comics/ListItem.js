import {useNavigate} from "react-router-dom"
import style from './Comic.module.css'

const ListItem = ({item}) => {

    // console.log("cek id", item.id)

    const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories, ratings_aggregate } = item

    const navigate = useNavigate()
    
    const handleDetail = () => {
        navigate(`/comics/${item.id}`, {
            state: {
                id: item.id, 
                title: item.title,
                penulis: item.penulis,
                penerbit: item.penerbit,
                tahunTerbit: item.tahunTerbit,
                cover: item.cover,
                content: item.content,
                categories: item.categories,
                ratings_aggregate: item.ratings_aggregate
            }
        })
    }
    // console.log("cek rating avg di listitem", ratings_aggregate)

    // let fixRating = ratings_aggregate.aggregate.avg.rating_value;
    // let avgRating = fixRating.toFixed(2);
    
    // console.log("pembulatan rating", avgRating)

    let avgRating
    let fixRating = ratings_aggregate.aggregate.avg.rating_value;
    if(fixRating == null ) {
      avgRating = "not rated yet"
    } else {
      avgRating = fixRating.toFixed(2);
    }
    
    return (
      <div className={style.comicItem}>
        <div className={`card ${style.cardListCustom}`}>
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
    //         <p>{item.title}</p>
    //         <p>{item.penulis}</p>
    //         <p>{item.penerbit}</p>
    //         <p>{item.tahunTerbit}</p>
    //     </div>
    // )
}

export default ListItem