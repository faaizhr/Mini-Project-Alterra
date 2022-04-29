import { Component, useEffect, useState } from "react";
// import useGetPassenger from "../../hooks/useGetPassenger";
import Navbar from "../Navbar";
import ListItem from "./ListItem"
import {useNavigate} from "react-router-dom"

import style from './Comic.module.css'
import useGetComic from "../../hooks/useGetComic";

function ListComic() {
    
    const {data, loading, error} = useGetComic()
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
            <div className="container">
                <h3>List Comics</h3>
                <div className={style.comicList}>
                    {data?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
                </div>
            </div>
        </div>
    )
}

export default ListComic