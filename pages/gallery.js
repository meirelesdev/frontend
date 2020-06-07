import Header from '../components/Header'
import axios from 'axios'
import React from 'react'
import Photo from '../components/Photo'

export default function Gallery(props) {
    return(
        <>
        <Header />
            <section>
                <Photo className="gallery-img" src="images/gym-room-1180062_1920.jpg"/>
                <img src="images/gym-room-1180062_1920.jpg"/>
            </section>
        </>
    )
}