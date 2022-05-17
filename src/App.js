import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Home from './component/Home/Home'
// import Login from './component/Login';
import ListComic from './component/Comics/ListComic';
import DetailComic from './component/Comics/ComicDetail';
import ListGenre from './component/Genre/ListGenre';
import ListComicByGenre from './component/Genre/ListComicByGenre';
import AboutUs from './component/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Login />}/> */}
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/comics' element={<ListComic />}/>
        <Route exact path='/comics/:id' element={<DetailComic />}/>
        <Route exact path='/genres' element={<ListGenre />}/>
        <Route exact path='/genres/:id' element={<ListComicByGenre />}/>
        <Route exact path='/about' element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
