import React, { Fragment } from 'react'

import './gallery.scss'

import hotel_1 from 'src/assets/img/hotel-1.jpg'
import hotel_2 from 'src/assets/img/hotel-2.jpg'
import hotel_3 from 'src/assets/img/hotel-3.jpg'

function Gallery() {

    return (
        <Fragment>
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={hotel_1} alt="Photo of hotel 1" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel_2} alt="Photo of hotel 2" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel_3} alt="Photo of hotel 3" className="gallery__photo" />
                </figure>
            </div>
        </Fragment>
    )
}

export default Gallery
