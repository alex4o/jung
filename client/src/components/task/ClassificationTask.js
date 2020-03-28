import React, { useState } from 'react'
import { Row, Col, Button, Divider, notification } from 'antd'

import { usePromise, Loadable } from '../../utils'
import { db } from '../../stores/db'

let allTasks = []

function ClassificationButton({ currentTask, value, stateManager, timesClicked, setClickedTimes }) {

    let [ bonus, setBonus ] = useState(5)

    let classify = () => {
        setClickedTimes(timesClicked + 1);

        if (timesClicked % 6 == 0 && timesClicked != 0) {
            setBonus(Math.floor(bonus * 1.5));
            notification.info({
                message: "Nice",
                description: "Good Work, You are on a streak!\n " + timesClicked + " and counting! " + bonus + " Bonus XP awarded!",
                placement: "bottomRight"
            })
        }

        let index = Math.floor(Math.random()*100) % allTasks.length

        currentTask.value.doc.labels.push(value)
        currentTask.value.doc.timesClassified += 1
        db.put(currentTask.value.doc)

        
        stateManager(allTasks[index])
    }

    return(
        <Col style={{ marginRight: 10 }}>
            <Button onClick={classify} type="primary" shape="round" size="big">
                {value}
            </Button>
        </Col>
    )
}

function ClassificationView({ props, value }) {

    let [ currentTask, setCurrentTask ] = useState(value[0])
    let [ numberOfTimesClicked, setClickedTimes ] = useState(0)
    let [ currentImageUrl, setImage ] = useState()

    return(
        <Col>
            <Row>
                <img style={{ objectFit: "cover", flex: 1, width: "100%", borderRadius: "15px" }}
                src={`http://fortress88.servebeer.com:5984/jung/${currentTask.id}/${Object.keys(currentTask.value.doc._attachments)[0]}`}/>
            </Row>
            <Divider/>
            <Row>
                {props.classes.map((el, i) => <ClassificationButton 
                    timesClicked={numberOfTimesClicked}
                    setClickedTimes={setClickedTimes}
                    stateManager={setCurrentTask}
                    currentTask={currentTask}
                    key={i} 
                    value={el}
                    />)}
            </Row>
        </Col>)
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

    let { loading, value } = usePromise(db.query("tables/task-view", { include_docs: true }).then(result => {
        allTasks = result.rows
        return result.rows
    }));
    
    return (
        <Loadable loading={loading} loaded={() => <ClassificationView props={props} value={value}/>}/>
    )
} 