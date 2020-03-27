import React, { Component } from "react";
import { DatePicker, Button } from 'antd';
import { observer } from "mobx-react";

import db from "../stores/db"
import { wrapPromise } from "../utils";

const returned = wrapPromise(db.get("0389dc2c1840a65e74d1ec1cf9006bfe"))

export default function App() {
    return (
        <div>
            { JSON.stringify(returned.read()) }
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
                </Button>
        </div>
    )
}
