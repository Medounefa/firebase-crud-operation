import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import './Header.css';

const Header = () => {

    const [activeTab, setAtiveTab]=useState("Home");
    const location = useLocation();
    const [search, setSearch] = useState("");
    const history = useNavigate();

    useEffect(() =>{
        if(location.pathname === "/"){
            setAtiveTab("Home");
        }else if(location.pathname === "/add"){
            setAtiveTab("AddContact");
        }else if(location.pathname === "/about"){
            setAtiveTab("About");
        }

    },[location]);

    const handleSubmit = (e) =>{
       e.preventDefault();
       history(`/search?name=${search}`);
       setSearch("");
    }

    return (
        <div className="header">
            <p className="logo">Contact app</p>
             <div className="header-right">

                 <form onSubmit={handleSubmit} style={{display:"inline"}}>
                     <input 
                     type="text"
                     className="inputField"
                     placeholder="Search name..."
                     onChange={(e)=> setSearch(e.target.value)}
                     value={search}
                     />
                 </form>
                 <Link to="/">
                     <p className={`${activeTab === "Home" ? "active": ""}`} onClick={() =>setAtiveTab('Home')}>
                         Home
                     </p>
                 </Link>
                 <Link to="/add">
                     <p className={`${activeTab === "AddContact" ? "active": ""}`} onClick={() =>setAtiveTab('AddContact')}>
                         Add Contact
                     </p>
                 </Link>
                 <Link to="/about">
                     <p className={`${activeTab === "About" ? "active": ""}`} onClick={() =>setAtiveTab('About')}>
                        About
                     </p>
                 </Link>
             </div>
        </div>
    )
}

export default Header
