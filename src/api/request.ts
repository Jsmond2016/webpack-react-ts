/*
 * @Description: 
 * @Date: 2020-12-12 13:51:31
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 import axios from 'axios'

 const httpInstance = axios.create({
   timeout: 2000,
   baseURL: '/api/'
 })

 export * from 'axios'
 export default httpInstance