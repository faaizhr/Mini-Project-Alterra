
const Categories = ({item}) => {

    // console.log("cek kategori item", item)
    console.log("cek kategori item genre", item.genre.genre)


    return (
        <li class="list-inline-item">{item.genre.genre}</li>   
    )
}

export default Categories