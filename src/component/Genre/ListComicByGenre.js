import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import ListItem from "../Comics/ListItem"
import ListItemComicByGenre from "./ListItemComicByGenre"
import style from "./Genre.module.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const ListComicByGenre = () => {

    const location = useLocation()
    // console.log("ListComicByGenre", location.state)
    const { id, genre, categories } = location.state
    console.log("ListComicByGenre", categories)

    return (
        <div>
            <Navbar/>
            <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
                <div className="container">
                <h1 className="display-4 mt-5">{genre} Comics</h1>
                <p className="lead"></p>
                </div>
            </div>
            <div className={`container ${style.comicContainer}`}>
                <div className={style.comicList}>
                    {categories?.map((comic) => <ListItemComicByGenre key={id} item={comic}/>)}
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default ListComicByGenre