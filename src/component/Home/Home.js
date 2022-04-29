import Navbar from "../Navbar";
import style from './Home.module.css'
import useGetComicLatest from "../../hooks/useGetComicLatest";
import ListItem from "../Comics/ListItem";
import Footer from "../Footer";

function Home() {

  const {data, loading, error} = useGetComicLatest()
  console.log("data latest", data)

  return (
    <div>
      <Navbar/>
      <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
        <div className="container">
          <h1 className="display-4">D'COMIC</h1>
          <p className="lead">online comic reading provider platform in Indonesia.</p>
        </div>
      </div>
      <div className="container-xxl">
        <div className="home-content">
          <p>D'comic is here as the most complete online comic reading provider platform in Indonesia. This platform allows you to access and download comics for free and can be translated into various languages. We will also continue to develop collaborations with various publishers to continue to complement the comics available on our website. Through a platform that will continue to be developed according to your wishes, D'comic will always strive to be your best platform. </p>
        </div>
      </div>

      <div className="container-xxl">
        <h3>New Arrival</h3>
        <div className={style.comicList}>
          {data?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home