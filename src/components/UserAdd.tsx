import React, { useState, useEffect, useCallback } from 'react'
import { message, Form, Button, Layout, Input, Menu } from 'antd'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { User, UserAddResponse } from '../typings/api'
import http, { AxiosResponse } from '../api/request'


type Props = RouteComponentProps

const UserAdd = (props: Props) => {

  const [user, setUser] = useState<User>({} as User)
  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault()
    http.post<UserAddResponse>('/user', user).then((res: AxiosResponse) => {
       const { code } = res.data
       if (code === 0) {
         props.history.push('/user/list')
       }else {
         message.error('添加失败')
       }
    })
  }, [user])

  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: event.target.value
    })
    console.log('old user', user);
  }, [user])

  useEffect(() => {
    console.log('new user', user);
  }, [user])

  return (
    <Form>
      <Form.Item>
        <Input
          placeholder="用户名"
          style={{width: 120}}
          value={user.name}
          onChange={handleNameChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>添加</Button>
      </Form.Item>
    </Form>
  )
}

export default UserAdd