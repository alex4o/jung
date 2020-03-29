import React, { useState } from 'react'
import { Row, Col, Button, Divider, notification } from 'antd'

import { usePromise, Loadable } from '../../utils'
import { db } from '../../stores/db'
import useStores from "../../hooks/useStores";
import { useQueue, useAsyncRetry } from 'react-use';
import _ from "lodash"

function ClassificationButton({ currentTask, value, timesClicked, setClickedTimes, remove, size, retry }) {

    let [bonus, setBonus] = useState(4)

    let { appStore } = useStores()

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

        currentTask.value.doc.labels = []
        currentTask.value.doc.timesClassified += 1
        db.put(currentTask.value.doc)

        appStore.addExp(10 + bonus)
        if (size == 1) {
            retry()
        } else {
            remove()
        }
    }

    return (
        <Col style={{ marginRight: 10 }}>
            <Button onClick={classify} type="primary" shape="round" size="big">
                {value}
            </Button>
        </Col>
    )
}

function ClassificationView({ value, retry, setClickedTimes, numberOfTimesClicked }) {

    let [currentImageUrl, setImage] = useState()

    const { add, remove, first, last, size } = useQueue(value)

    console.log(size, last, first)

    return (
        <Col>
            <Row>
                <img style={{ objectFit: "cover", flex: 1, width: "100%", borderRadius: "15px" }}
                    src={`http://fortress88.servebeer.com:5984/jung/${first.id}/${Object.keys(first.value.doc._attachments)[0]}`} />
            </Row>
            <Divider />
            <Row>
                {first.doc.classes.map((el, i) => <ClassificationButton
                    timesClicked={numberOfTimesClicked}
                    setClickedTimes={setClickedTimes}
                    currentTask={first}
                    key={i}
                    value={el}
                    remove={remove}
                    size={size}
                    retry={retry}
                />)}
            </Row>
        </Col>)
}

export default function ClassificationTask({ problem }) {
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
    
    let [numberOfTimesClicked, setClickedTimes] = useState(0)
    console.log(problem)
    let { loading, value, retry } = useAsyncRetry(() => db.query("tables/task-view", { include_docs: true, startkey: [ problem._id ], endkey: [problem._id, {}] }).then(result => result.rows));

    return (
        <Loadable loading={loading} loaded={() => <ClassificationView 
            // props={props} 
            value={_.shuffle(value)} 
            retry={retry} 
            numberOfTimesClicked={numberOfTimesClicked}
            setClickedTimes={setClickedTimes}
            />} />
    )
} 