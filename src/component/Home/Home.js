import Navbar from "../Navbar/Navbar";
import style from './Home.module.css'
import useGetComicLatest from "../../hooks/useGetComicLatest";
import useGetComicBest from "../../hooks/useGetComicBest";
import ListItem from "../Comics/ListItem";
import Footer from "../Footer/Footer";
import LoadingSvg from "../Comics/loadingSvg";

function Home() {

  const {data: dataLatest, loading: loadingLatest, error} = useGetComicLatest()
  console.log("data latest di home", dataLatest)

  const {data: dataBest, loading: loadingBest} = useGetComicBest()
  console.log("data best di home", dataBest)

  return (
    <div>
      <Navbar/>
      <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
        <div className="container mt-5">
          <h1 className="display-4 pt-5">YOMU</h1>
          <p className="lead">online comic reading provider platform in Indonesia.</p>
        </div>
      </div>
      <div className="container-xxl">
        <div className="home-content">
          <p>YOMU is here as the most complete online comic reading provider platform in Indonesia. This platform allows you to access and download comics for free and can be translated into various languages. We will also continue to develop collaborations with various publishers to continue to complement the comics available on our website. Through a platform that will continue to be developed according to your wishes, YOMU will always strive to be your best platform. </p>
        </div>
      </div>

      <div className="container-xxl">
        <h3 className="mb-4">New Arrival</h3>
        <div className={style.comicList}>
          {dataLatest?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
          { loadingLatest ? <LoadingSvg/> : ""}
        </div>
        <h3 className="mb-4">Best Comic</h3>
        <div className={style.comicList}>
          {dataBest?.comics.map((comic) => <ListItem key={comic.id} item={comic}/>)}
          { loadingBest ? <LoadingSvg/> : ""}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home