import "./topbar.css";
import { useState, useEffect } from "react";

import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router";
import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

export default function Topbar({data,setData,srch,setSrch}) {

  const location = useLocation()
  const url = location.pathname.split("/")[1]
  const { user,dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [search,setSearch]=useState(null)
const handleChange=(e)=>{
      const value = e.target.value
      
      setSrch(value)
}

useEffect(()=>{
    
  const getProducts = async()=>{
    try {
      const res = await axios.get(`http://localhost:8800/api/query?${search}`)
      //console.log("res",res.data)
      const newData = res.data
      setData(newData)
      // console.log("data-top",data)
    } catch (error) {
        console.log(error)
    }
  }
    getProducts()
  
},[search])

const handleClick=()=>{
  console.log("clicked")
  dispatch({ type: "LOG_OUT",payload: user._id})
}
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social Network</span>
        </Link>
      </div>
      <div className="topbarCenter">
        {!url ? <div className="searchbar">
          <Link style={{"textDecoration":"none","color":"black"}} to="/search">
            <span className="topbarLink">search</span>
          </Link>
        </div>: <div className="searchbar">
          <Search className="searchIcon" />
          <input onChange={handleChange}
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>}
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          {/* <div> */}
          <Link style={{"textDecoration":"none","color":"white"}} to="/login">
          <button onClick={()=>handleClick()} className="topbarLink">Log Out</button>
          </Link>
          {/* </div> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
