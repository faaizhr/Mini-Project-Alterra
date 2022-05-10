import style from './Footer.module.css'

function Footer() {

    return (
        <div className={`mt-5 container ${style.footer}`}>
            <div className={style.logo}>
                <i className="bi bi-instagram me-4"></i>
                <i className="bi bi-facebook me-4"></i>
                <i className="bi bi-youtube me-4"></i>
                <i className="bi bi-twitter"></i>
            </div>
            <p>Copyright © 2021 YOMU All Rights Reserved</p>
        </div>
    )
}

export default Footer