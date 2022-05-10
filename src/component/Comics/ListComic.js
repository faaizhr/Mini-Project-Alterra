import { Component, useEffect, useState } from "react";
// import useGetPassenger from "../../hooks/useGetPassenger";
import Navbar from "../Navbar/Navbar";
import ListItem from "./ListItem"
import Footer from "../Footer/Footer";
import {useNavigate} from "react-router-dom"

import style from './Comic.module.css'
// import useGetComic from "../../hooks/useGetComic";
import useSubscriptionComic from "../../hooks/useSubscriptionComic";

function ListComic() {
    
    const {data, loading, error} = useSubscriptionComic()
    console.log("data", data)

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
                    <h1 className="display-4 mt-5">COMIC LISTS</h1>
                    <p className="lead">our comic collection we have.</p>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Search Comic..."></input>
                <button>Search</button>
            </div>
            <div className={`container ${style.comicContainer}`}>
                <div className={style.comicList}>
                    {data?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListComic