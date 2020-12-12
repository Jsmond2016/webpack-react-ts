import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'

type Props = RouteComponentProps


class NavBar extends React.Component<Props> {
  render() {
    return (
      <Layout.Header>
        <Menu
          theme="dark"
          style={{lineHeight: '64px'}}
          mode="horizontal"
          selectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item>
            <Link to="/counter1">counter1</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/counter2">counter2</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/user">user</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}

export default withRouter(NavBar)