import {useNavigate} from "react-router-dom"
import style from './Comic.module.css'

const ListItem = ({item}) => {

    // console.log("cek id", item.id)

    const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories } = item

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
            <h5 className="card-title" onClick={() => handleDetail(item.id)}>{title}</h5>
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
    //         <p>{item.title}</p>
    //         <p>{item.penulis}</p>
    //         <p>{item.penerbit}</p>
    //         <p>{item.tahunTerbit}</p>
    //     </div>
    // )
}

export default ListItem