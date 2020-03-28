import React from "react";
import { Carousel } from 'antd'
import '../../styles/landingPage.css'

function onChange(event) {
    console.log(event)
}

export default function LandingPage() {
    return(
        <Carousel style={{ fontSize: 60, color: 'white' }} afterChange={onChange} autoplay>
            <div>
                <h3>Save</h3>
            </div>

            <div>
                <h3>Communities</h3>
            </div>

            <div>
                <h3>Save</h3>
            </div>

            <div>
                <h3>Business</h3>
            </div>
        </Carousel>
    )
}