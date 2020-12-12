/*
 * @Description: 
 * @Date: 2020-12-12 12:11:11
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 export interface User {
   _id: string
   name: string
 }

 export interface UserListResponse {
   code: number
   data: User[]
 }


 export interface UserAddResponse {
   code: number
   data: User
 }