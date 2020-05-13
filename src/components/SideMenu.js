import React from "react"
import {Layout, Menu} from 'antd';
import {
    MailOutlined,
    CodeOutlined,
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

class SideMenu extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };
    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                width="138px">
                <div className="logo"/>
                <Menu
                    className="side-color"
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline">
                    <Menu.Item key="1" icon={< HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={< UserOutlined />}>
                        About
                    </Menu.Item>
                    <Menu.Item key="3" icon={< CodeOutlined />}>
                        Projects
                    </Menu.Item>
                    <Menu.Item key="4" icon={< MailOutlined />}>
                        Contact
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SideMenu
