import { Link } from 'react-router-dom'
import style from './Footer.module.css'

function Footer() {

    // return (
    //     <div className={`mt-5 container ${style.footer}`}>
    //         <div className={style.logo}>
    //             <div className={style.instagramLogo}>
    //                 <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram me-4"></i></a>
    //             </div>
    //             <div className={style.facebookLogo}>
    //                 <a href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook me-4"></i></a>
    //             </div>
    //             <div className={style.youtubeLogo}>
    //                 <a href="https://www.youtube.com" target="_blank"><i className="bi bi-youtube me-4"></i></a>
    //             </div>
    //             <div className={style.twitterLogo}>
    //                 <a href="https://www.twitter.com" target="_blank"><i className="bi bi-twitter"></i></a>
    //             </div>
    //         </div>
    //         <p>Copyright © 2021 YOMU All Rights Reserved</p>
    //     </div>
    // )

    return (
        <div className={`mt-5 ${style.footer}`}>
            <div className="container pt-4">
                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        <h6>YOMU</h6>
                        <p>YOMU is here as the most complete online comic reading provider platform in Indonesia. This platform allows you to access and download comics for free and can be translated into various languages.</p>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <h6>Contact Us</h6>
                        <div>
                            <i className="bi bi-telephone d-inline"></i>
                            <p className='d-inline-block ms-3'>081222249165</p>
                        </div>
                        <div>
                            <i className="bi bi-geo-alt d-inline"></i>
                            <p className='d-inline ms-3'>Pacific Century Place Tower Lt. 26 SCBD (Sudirman Central Business District) Lot 10, Jl. Jenderal Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190</p>
                        </div>
                        <div>
                            <i className="bi bi-envelope"></i>
                            <p className='d-inline-block ms-3'>faizhafizh29@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <h6>Follow Us</h6>
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
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>Copyright © 2022 YOMU All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer