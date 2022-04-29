
const Categories = ({item}) => {

    // console.log("cek kategori item", item)
    console.log("cek kategori item genre", item.genre.genre)


    return (
        <div>
            <p>{item.genre.genre}</p>
        </div>
    )
}

export default Categories