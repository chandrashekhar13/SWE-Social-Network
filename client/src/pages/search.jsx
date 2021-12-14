import React, { useState } from "react";

import styled from 'styled-components'

import Topbar from "../components/topbar/Topbar"


import axios from 'axios'
import { Link } from "react-router-dom";
const Container = styled.div`

`

const Middlebox = styled.div`
height:80vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:50px;
`
const Wrapper = styled.div`
/* margin-top:50px; */
margin:5px;
width:500px;
/* height:50px; */
border-radius:10px;
padding:5px;
flex:1;
border:2px solid;
display:flex;
align-items:center;
justify-content:space-around;

`
const Name = styled.span`
/* height:50px; */
flex:1;
padding-left:50px;
`
const Id = styled.span`
/* height:40px; */
flex:1;
padding-left:-50px;

`

const Search =()=>{

    const [data,setData] = useState([])
    const [srch,setSrch]= useState([])
    console.log("data",data)
    let sortedUser = data.filter((id)=>{
                            return id.username.startsWith(srch)
                    })
    return(
    <Container>
        <Topbar data={data} setData={setData} srch={srch} setSrch={setSrch}/>
        <Middlebox>
            {
                sortedUser.map((item)=>(
                    <Link style={{"textDecoration":"none","color":"black"}} to={`/profile/${item.username}`}>
                    <Wrapper> 
                    <Name>{item.username}</Name>
                    <Id>{item.email}</Id>
                    </Wrapper>
                    </Link>
                ))
            }

        </Middlebox>

    </Container>
    )
}

export default Search