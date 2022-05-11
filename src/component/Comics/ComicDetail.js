// import ListItem from "./ListItem"
import { gql, useLazyQuery, useQuery } from "@apollo/client"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import ListItem from "./ListItem"
import Categories from "./Categories"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useInsertRating from "../../hooks/useInsertRating"
import ReactStars from "react-rating-stars-component";
import style from "./Comic.module.css"
// import useGetRelatedComics from "../../hooks/useGetRelatedComics";
import useGetComic from "../../hooks/useGetComic"

const GetRelatedComics = gql `
query MyQuery ($_eq: String = "", $_neq: String = "") {
  comics (where: {penulis: {_eq: $_eq}, title: {_neq: $_neq}}, limit: 4) {
    content
    cover
    id
    penerbit
    penulis
    tahunTerbit
    title
    categories {
      genre {
        genre
        id
      }
    }
    ratings_aggregate {
      aggregate {
        avg {
          rating_value
        }
      }
    }
  }
}
`;

const DetailComic = (item) => {

  
  const location = useLocation()
  const { id, title, penulis, penerbit, tahunTerbit, cover, content, categories, ratings_aggregate } = location.state

    // const {data, loading, error} = useGetComic()
    // console.log("data komik di detail", data)
  
    const {data, loading, error} = useQuery(GetRelatedComics, {variables: { _eq: penulis, _neq: title }})
    // const [relatedComics, setRelatedComics] = useState(penulis)
    
    console.log("data Related di comicdetail", data)
  
  
    const {insertRating, loadingInsertRating} = useInsertRating()
    console.log("cek rating di detail", location.state)
    const [value, setValue] = useState({
      rating: '0'
    })

    const ratingChanged = (newRating) => {
      console.log("new rating", newRating);
      setValue(newRating)
    };

    console.log("cek rating stars", value)
    console.log("cek id rating", id)

    const rating = () => {
      insertRating({
        variables: {
          comic_id: id,
          rating_value: value
        }
      })
      if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5) {
        alert("Thank You")
      }
      else alert("Enter your stars")
    }

    let fixRating = ratings_aggregate.aggregate.avg.rating_value;
    let avgRating = fixRating.toFixed(2);

    // console.log("detail", location.state)
    // console.log("cek kategori", categories)

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
          <Navbar/>
          <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
            <div className="container">
              <h1 className="display-4 mt-5">Comic Detail</h1>
              {/* <p className="lead">{title}</p> */}
            </div>
          </div>
          <div style={editMode}>
            <div className={`card mb-3 mt-5 container ${style.cardCustom}`}>
              <div className="row g-0 container">
                <div className="col-md-4 my-auto">
                  <img src={cover} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text">{id}</p> */}
                    <p className="card-text">Author : {penulis} </p>
                    <p className="card-text">Publisher : {penerbit}</p>
                    <p className="card-text">Published : {tahunTerbit}</p>
                    <div className="text-right">
                      <p className="card-text me-2" style={{display : "inline"}}>{avgRating}/5.00</p>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Genre : </p>
                    <ul class="list-inline">
                      {categories.map((genre) => <Categories key={id} item={genre}/>)}
                    </ul>

                    <button onClick={handleBukaInput} style={editMode} className="py-1 px-3">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`container ${style.rating}`}>
              <h5>Rate this comic</h5>
              <ReactStars
                classNames={style.reactStars}
                count={5}
                onChange={ratingChanged}
                size={29}
                activeColor="#ffd700"
              />
              <button onClick={rating} className="py-1 px-3">Submit Rating</button>
            </div>
            <div className="container">
              <h3>Related Comics</h3>
              <div className={style.comicList}>
                {data?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
              </div>
            </div>
          </div>
          <div className={`text-center mb-5 ${style.readComic}`} style={viewMode}>
            <iframe
                src={content}
                frameBorder="0"
                scrolling="auto"
                height="950px"
                width="60%"
            ></iframe><br/>
            <button className="mt-3" onClick={handleTutupInput}>Stop Read</button>
          </div>
          <Footer />
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