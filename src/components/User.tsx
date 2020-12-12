import React from "react";
import { Link, RouteComponentProps, withRouter, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

type Props = RouteComponentProps;

const { Sider, Content } = Layout;

class User extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[this.props.location.pathname]}
          >
            <Menu.Item>
              <Link to="/user/add">添加用户</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/user/list">用户列表</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{padding: '20px'}}>
          <Route path="/user/add" component={UserAdd} />
          <Route path="/user/list" component={UserList} />
          <Route path="/user/detail/:id" component={UserDetail} />
        </Content>
      </Layout>
    );
  }
}

export default withRouter(User);
