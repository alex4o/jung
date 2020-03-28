import React, { Component } from "react";
import { DatePicker, Button } from 'antd';
import { useObserver, useLocalStore } from "mobx-react";


import { usePromise } from "../utils";

export default function App() {

    return (
        <div>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
            </Button>
        </div>
    )
}
