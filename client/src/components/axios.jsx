import axios from 'axios'
import {useSelector } from 'react-redux'
const BaseUrl = "http://localhost:5000/api/v1"


const Token=()=>{
          return( useSelector(state=>state.user.token))
}


export const publicRequest =  axios.create({baseURL:BaseUrl}) 

export const userRequest =  axios.create({
          baseURL:BaseUrl,
          header:{
                
          }
})