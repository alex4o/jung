import React from 'react'
import { PageHeader, Typography, Tooltip, Button, Progress, Col, Row } from 'antd'
import { CheckOutlined, ExperimentTwoTone, CompassFilled } from '@ant-design/icons'
const { Text } = Typography

export default function Quest (props) {
    return(
        <div style={{ 
                height: "180px", 
                borderRadius: "25px", 
                backgroundColor: "#f0f2f5",
                marginRight: "15px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column"
            }} >

            <PageHeader style={{borderRadius: "25px"}} title={props.title}/>

            <Text style={{marginLeft: "25px"}}>
                {props.description}
            </Text>
                
            <Tooltip title={props.progress + " out of " + props.target + " done!"}>
                <Progress 
                    style={{ paddingRight: "50px", marginLeft: "25px"}}
                    percent={Math.floor((props.progress/props.target)*100)}
                    trailColor="#AAA"/>
            </Tooltip>

            <Row justify="center" style={{ marginTop: "15px", marginLeft: "15px" }}>
                <Col style={{ fontSize: "20px" }} pull={2}>
                    <ExperimentTwoTone className="rewardIcon"/> {props.reward} XP 
                </Col>
                <Col style={{ fontSize: "20px" }} >
                    <CompassFilled /> {props.requiredLvl} LVL
                </Col>
                
            </Row>
        </div>
    )
}