import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/App.css';
import {Layout} from 'antd';
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

const {Content} = Layout;

class App extends React.Component {

    render() {
        return (
            <Layout style={{
                minHeight: '100vh',
                backgroundColor: "black"
            }}>
                <SideMenu/>
                <Layout className="site-layout">
                    <Content >
                        <div className="content">
                            <Main/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App