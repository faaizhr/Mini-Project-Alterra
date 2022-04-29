import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import ListItem from "../Comics/ListItem"
import ListItemComicByGenre from "./ListItemComicByGenre"

const ListComicByGenre = () => {

    const location = useLocation()
    // console.log("ListComicByGenre", location.state)
    const { id, genre, categories } = location.state
    console.log("ListComicByGenre", categories)

    return (
        <div>
            <h1>{genre}</h1>
            {categories?.map((comic) => <ListItemComicByGenre key={id} item={comic}/>)}
        </div>
    )

}

export default ListComicByGenre