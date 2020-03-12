import React from "react";
// import Avatar from 'react-avatar';
import 'font-awesome/css/font-awesome.min.css';
import PictureProfile from './picture.jpg';
import addusers from './addusers.PNG';
import message from './message.PNG';
import notif from './notif.PNG';
import about from './about.PNG';
import deconnection from './deconnection.PNG';
import './MenuHeader.css';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Badge } from 'antd';

function MenuHeader(){
    return(
        <div className="menu-header">
            {/* <Avatar alt="Picture-profile" src={PictureProfile} className="picture" /> */}
            <div className="picture"><Avatar size={34} src={PictureProfile}/></div>
            <div className="full-name"><span>Salma Chafouk</span></div>
            {/* <div className="status"><Badge status="success" /></div> */}
            <div className="separateur"><span>|</span></div>
            <div className="menu"><span>Accueil</span></div>
            <div className="separateur"><span>|</span></div>
            <div className="menu"><span>Créer</span></div>
            <div className="separateur"><span>|</span></div>
            <img src={addusers} className="add-users" alt="Bloc-Notes" />
            <img src={message} className="message" alt="Bloc-Notes" />
            <img src={notif} className="notif" alt="Bloc-Notes" />
            <div className="separateur"><span>|</span></div>
            <img src={about} className="about" alt="Bloc-Notes" />
            <img src={deconnection} className="deconnection" alt="Bloc-Notes" />
        </div>
    )
}

export default MenuHeader
