import React, { Component } from "react";
import { DatePicker, Button } from 'antd';
import { useObserver, useLocalStore } from "mobx-react";

import db from "../stores/db"
import { usePromise } from "../utils";

export default function App() {
    let state = usePromise( db.get("0389dc2c1840a65e74d1ec1cf9006bfe") )
    console.log(state)

    return (
        <div>
            {state.loading ? "Loading ..." : JSON.stringify(state.value)}
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
            </Button>
        </div>
    )
}
