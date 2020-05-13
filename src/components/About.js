import React from "react";
import {Card} from "antd";
import {red} from '@ant-design/colors';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <Card
                    bordered={false}
                    style={{
                    width: 300,
                    backgroundColor: "#431418",
                    color: "white"
                }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}

export default About;
