import { Link } from 'react-router-dom'
import style from './Footer.module.css'

function Footer() {

    return (
        <div className={`mt-5 container ${style.footer}`}>
            <div className={style.logo}>
                <div className={style.instagramLogo}>
                    <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram me-4"></i></a>
                </div>
                <div className={style.facebookLogo}>
                    <a href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook me-4"></i></a>
                </div>
                <div className={style.youtubeLogo}>
                    <a href="https://www.youtube.com" target="_blank"><i className="bi bi-youtube me-4"></i></a>
                </div>
                <div className={style.twitterLogo}>
                    <a href="https://www.twitter.com" target="_blank"><i className="bi bi-twitter"></i></a>
                </div>
            </div>
            <p>Copyright © 2021 YOMU All Rights Reserved</p>
        </div>
    )
}

export default Footer