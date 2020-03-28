import React from "react";
import { Carousel } from 'antd'
import '../../styles/landingPage.css'

function onChange(a, b, c) {
    console.log(a, b, c);
  }

export default function LandingPage() {
    return(
        <Carousel style={{ fontSize: 60, color: 'white' }} afterChange={onChange} autoplay>
            <div>
                <h3>ти</h3>
            </div>

            <div>
                <h3>си</h3>
            </div>

            <div>
                <h3>гей</h3>
            </div>

            <div>
                <h3>!</h3>
            </div>
        </Carousel>
    )
}