import React from "react";
// import Avatar from 'react-avatar';
import Search from './../Search/Search';
import MenuHeader from './../MenuHeader/MenuHeader';
import 'font-awesome/css/font-awesome.min.css';
// import PictureProfile from './picture.jpg';
import './header.css';

function Header(){
    return(
        <div className="header">            
            <Search className="search" />
            {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
            {/* <Avatar alt="Picture-profile" src={PictureProfile} className="picture" /> */}
            <MenuHeader className="menu-header"/>
        </div>
    )
}

export default Header
