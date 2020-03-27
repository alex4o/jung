import React, { Component } from "react";
import { DatePicker, Button } from 'antd';
import { observer } from "mobx-react";

@observer
export default class App extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>

                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        )
    }
}
