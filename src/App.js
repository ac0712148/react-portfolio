import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/App.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {MailOutlined, CodeOutlined, HomeOutlined, UserOutlined, AppstoreOutlined} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout style={{
                minHeight: '100vh'
            }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    width="138px"
                    >
                    <div className="logo"/>
                    <Menu className="side-color" theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <Menu.Item key="1" icon={< HomeOutlined />}>
                            HOME
                        </Menu.Item>
                        <Menu.Item key="2" icon={< UserOutlined />}>
                            ABOUT
                        </Menu.Item>
                        <Menu.Item key="3" icon={< CodeOutlined />}>
                            PROJECTS
                        </Menu.Item>
                        <Menu.Item key="4" icon={< MailOutlined />}>
                            CONTACT
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                        padding: 0
                    }}/>
                    <Content
                        style={{
                        margin: '16px 16px'
                    }}>
                        Test Text
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