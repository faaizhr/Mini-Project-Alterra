import { Component, useEffect, useState } from "react";
// import useGetPassenger from "../../hooks/useGetPassenger";
import Navbar from "../Navbar/Navbar";
import ListItem from "./ListItem"
import Footer from "../Footer/Footer";
import LoadingSvg from "./loadingSvg";
import {useNavigate} from "react-router-dom"

import style from './Comic.module.css'
// import useGetComic from "../../hooks/useGetComic";
import useSubscriptionComic from "../../hooks/useSubscriptionComic";
import { gql, useLazyQuery } from "@apollo/client";

const searchComics = gql `
query MyQuery($_ilike: String = "") {
    comics(where: {title: {_ilike: $_ilike}}) {
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

function ListComic() {
    
    const {data, loading, error} = useSubscriptionComic()
    console.log("data", data)

    const [state, setState] = useState("%%")
    const [searchComic, {data: dataSearch, loading: loadingSeacrh, error: errorSearch}] = useLazyQuery(searchComics)

    const onChange = (e) => {
        setState("%" + e.target.value + "%")
        console.log("cek search input", e.target.value)
    }
    console.log("cek state", state)

    const handleClick = () => {
        searchComic({
            variables: {
                _ilike: state
            }
        })
        // setState("%%")
    }

    // if(loadingSeacrh){
    //     return (
    //         <iframe src="loading.svg" width="400px" height="400px"></iframe>
    //     )
    // }

    console.log("data search", dataSearch)

    const comicData = (state == "%%") ? data : dataSearch
    console.log("comicData", comicData)

    return(
        <div>
            <Navbar/>
            <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
                <div className="container">
                    <h1 className="display-4 mt-5">COMIC LISTS</h1>
                    <p className="lead">our comic collection we have.</p>
                </div>
            </div>
            <div className={`container ${style.searchbar}`}>
                <input type="text" placeholder="Search Comic..." onChange={onChange}></input>
                <button onClick={handleClick}>Search</button>    
            </div>
            { loading ? <LoadingSvg/> : ""}
            { loadingSeacrh ? <LoadingSvg/> : ""}
            <div className="container">
                <div className={style.comicList}>
                    {comicData?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListComic