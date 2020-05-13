import React from "react";
import {Card} from "antd";
import {red} from '@ant-design/colors';

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Card
                    bordered={false}
                    style={{
                    width: 300,
                    backgroundColor: "#2a1215",
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

export default Home;
