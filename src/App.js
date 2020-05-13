import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/App.css';
import {Layout} from 'antd';
import SideMenu from "./components/SideMenu"

const {Content, Footer} = Layout;

class App extends React.Component {

    render() {
        return (
            <Layout style={{
                minHeight: '100vh'
            }}>
                <SideMenu/>
                <Layout
                    className="site-layout"
                    style={{
                    minHeight: '100vh'
                }}>
                    <Content >
                        <div className="content" >Test Text Hello World</div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>fOOTER</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App