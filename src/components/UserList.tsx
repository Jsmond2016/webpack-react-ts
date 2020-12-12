import React, { useState, useEffect } from 'react'
import { message, Table } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import { Link } from 'react-router-dom'
import { User, UserListResponse } from '../typings/api'
import httpInstance, { AxiosResponse } from '../api/request'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CombinedState } from '../store/reducers/index';
import { UserState } from '../store/reducers/user';
import * as types from '../store/action-types';


const mapStateToProps = (state: CombinedState): UserState => state.user
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserList(list: User[]) {
    dispatch({ type: types.SET_USER_LIST, payload: list })
  }
})

const columns: ColumnProps<User>[] = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '跳转详情页',
    dataIndex: 'jump',
    key: 'jump',
    render: (val, record) => (<Link to={`/user/detail/${record._id}`} >跳转</Link>)
  }
]


type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const UserList = (props: Props ) => {

  // const [users, setUsers] = useState<User[]>([])
  const users = props.list
  useEffect(() => {
    (async function () {
      const res: AxiosResponse<UserListResponse> =  await httpInstance.get<UserListResponse, AxiosResponse<UserListResponse>>('/users')
      const { data, code } = res.data
      if (code === 0) {
        // setUsers(data)
        props.setUserList(data)
      } else {
        message.error('获取用户列表失败')
      }
     })()
  }, [])


  return (
    <Table columns={columns} dataSource={users} rowKey={row => row._id} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)