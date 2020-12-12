import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  _id: string
}
type Props = RouteComponentProps<Params> 

const UserDetail = (props: Props) => {
  return (
    <div>UserDetail-ID: {props.match.params._id} </div>
  )
}


export default UserDetail