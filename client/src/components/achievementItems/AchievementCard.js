import React from 'react'
import { Popover, Card, Col } from 'antd'

import { iconHashMap } from './AchievementsIconMap'

export default function AchievementCard(props) {

    props = props.data

    const content = (
        <div>
            {props.description}
        </div>
    )

    return (
        <Popover placement="top" title={props.title} content={content}>
            <div className="achievementItem" style={{ 
                fontSize: "50px",
                width: "80px",
                height: "80px",
                textAlign: "center",
                margin: "20px",
                borderRadius: "500px",
                border: "3px solid #1890ff"
            }}>
                {iconHashMap[props.icon]}
            </div>
        </Popover>
    );
}