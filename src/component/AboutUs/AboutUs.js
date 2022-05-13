import Navbar from "../Navbar/Navbar"
import style from "./About.module.css"
import Footer from "../Footer/Footer"
import VisiImage from "./img/visi.jpg"
import MisiImage from "./img/misi.jpg"

import ProfileAvatar from "./img/profileimg.png"

function AboutUs() {
    return(
        <div>
            <Navbar/>
            <div className={`jumbotron jumbotron-fluid ${style.jumbotronCustom}`}>
                <div className="container">
                <h1 className="display-4 mt-5">About Us</h1>
                {/* <p className="lead">{title}</p> */}
                </div>
            </div>
            <div className="container">
                <div className={style.description}>
                    <h1>Yomu</h1>
                    <p>"Yomu" comes from Japanese which means "read". However, behind the word there is a special meaning in it, which is</p>
                    <ul>
                        <li><span>Y</span>outh</li>
                        <li><span>O</span>nline</li>
                        <li><span>M</span>odern</li>
                        <li><span>U</span>seful</li>
                    </ul>
                    <p>So that this combination of words has a meaning, namely a place to read comics for modern young people where its use is very easy and can be enjoyed online from a website.<span> YOMU</span> is here as the most complete online comic reading provider platform in Indonesia. This platform allows you to access and download comics for free and can be translated into various languages. We will also continue to develop collaborations with various publishers to continue to complement the comics available on our website. Through a platform that will continue to be developed according to your wishes, <span> YOMU</span> will always strive to be your best platform.</p>
                </div>
                <div className={`p-5 ${style.visionMission}`}>
                    <div className={`d-flex justify-content-around align-items-center mt-5 ${style.vision}`}>
                        <div>
                            <h5>Vision</h5>
                            <ul>
                                <li>To become the most complete comic reading provider platform in Indonesia.</li>
                                <li>Support authors and comic artists to always make masterpieces.</li>
                            </ul>
                        </div>
                        <img src={VisiImage}></img>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mt-5">
                        <img src={MisiImage}></img>
                        <div className="text-right">
                            <h5>Mission</h5>
                            <p>Provide the widest possible space for comic lovers to access comics published both abroad and within the country.</p>
                            <p>Bridging between the Indonesian comic community and the community or groups outside the comic community, for example the book community/community.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2>Meet Our Creator</h2>
                    <div className="d-flex justify-content-around mt-5 flex-wrap">
                        <img src={ProfileAvatar}></img>
                        <div className={style.biodata}>
                            <p>Muhammad Faiz Hafizh Ramadhan</p>
                            <p>Information System Student at Universitas Pembangunan Nasional Veteran Jakarta</p>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h2>Contact Us</h2>
                </div> */}
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs