import React, { Component } from "react";
import { DatePicker, Button } from 'antd';
import { observer } from "mobx-react";

import db from "../stores/db"
import { wrapPromise } from "../utils";

import { useAsync } from "react-use"

const returned = wrapPromise()

export default function App() {
    let state = useAsync(db.get("0389dc2c1840a65e74d1ec1cf9006bfe"))

    return (
        <div>
            {state.loading == false ? JSON.stringify(state.value) : <span>Loading</span>}
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
                </Button>
        </div>
    )
}
