import React, { useState } from 'react'
import { Row, Col, Button, Divider } from 'antd'

function classify() {
    
}


function ClassificationButton({ value, currentImage }) {
    
    let classify = () => {
        // Get a random not classified image
    }

    return(
        <Col style={{ marginRight: 10 }}>
            <Button onClick={classify} type="primary" shape="round" size="big">
                {value}
            </Button>
        </Col>
    )
}

export default function ClassificationTask(props) {
    /**
     * Classification JSON
     * {
     *     type: "classification"
     *     image: url string,
     *     classes: [ array of strings ], 
     *     label: "" or string,
     *     timesClassified: X,
     *     classified: boolean
     * }
     */
    props = {
        classes: [ "airplane", "car", "boat", "truck" ]
    }

    let [ currentImageUrl, setImage ] = useState()
    

    return (
        <Col>
            <Row>
                <img src={currentImageUrl}>
                </img>
            </Row>
            <Row>
                {props.classes.map((el, i) => <ClassificationButton key={i} value={el}/>)}
                <Divider type={"vertical"} style={{ backgroundColor: "#AAA", height: "30px" }} />
                <Col style={{ marginRight: 10 }}>
                    <Button type="primary" shape="round" size="big">
                        Next
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" shape="round" size="big">
                        Done
                    </Button>
                </Col>
            </Row>
        </Col>
    )
} 