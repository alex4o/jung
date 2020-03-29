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
                <h3>Jung</h3>
            </div>

            <div>
                <h3>You can make a difference!</h3>
            </div>

            <div>
                <h3>Teach computers stuff!</h3>
            </div>
        </Carousel>
    )
}