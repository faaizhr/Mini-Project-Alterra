// import ListItem from "./ListItem"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import Categories from "./Categories"

const DetailComic = (item) => {

    const location = useLocation()
    const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories } = location.state

    console.log("detail", location.state)
    console.log("cek kategori", categories)

    const [editing, setEditing] = useState(true)

    const handleBukaInput = () => {
        setEditing(false)
    }
    
    const handleTutupInput = () => {
        setEditing(true)
    }
    
    const viewMode = {};
    const editMode = {};
    
      if (editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }


    return (
        <div>
        <div className="card mb-3" style={{maxWidth: '540px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={cover} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{id}</p> */}
                <p className="card-text">{penulis}</p>
                <p className="card-text">{penerbit}</p>
                <p className="card-text">{tahunTerbit}</p>
                {categories.map((genre) => <Categories key={id} item={genre}/>)}
                <button onClick={handleBukaInput} style={editMode}>Read</button>
              </div>
            </div>
          </div>
        </div>
        <div style={viewMode}>
                <button onClick={handleTutupInput}>Stop Read</button>
          <iframe
              src={content}
              frameBorder="0"
              scrolling="auto"
              height="900px"
              width="100%"
          ></iframe>
        </div>
      </div>
    )


    // return (
    //     <div>
    //         <h4>Detail Comics</h4>
    //         <p>{id}</p>
    //         <p>{title}</p>
    //         <p>{penulis}</p>
    //         <p>{penerbit}</p>
    //         <p>{tahunTerbit}</p>
    //     </div>
    // )
}

export default DetailComic