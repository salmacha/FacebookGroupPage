import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import FriendsOnline from './FriendsOnline';
import BasicSearch from './../BasicSearch/BasicSearch';
// import PictureProfile from './picture.jpg';
import PictureRania from './rania.jpg';
import PictureKassem from './kassem.jpg';
import PictureAmal from './amal.jpg';
import PictureGhaith from './ghaith.jpg';
import PictureAmeni from './ameni.jpg';
import PictureZaineb from './zaineb.jpg';
import PictureEmna from './emna.jpg';
import PictureFatma from './fatma.jpg';
import PictureHajer from './hajer.jpg';
import PictureAtef from './atef.jpg';
import PictureNesrine from './nesrine.jpg';
import PictureSeif from './seif.jpg';
import './SidebarRight.css';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Badge } from 'antd';

const friends=[
    {
        name:"Rania Boltane",
        picture:PictureRania,
        status:"success",
    },
    {
        name:"Kassem Chafouk",
        picture:PictureKassem,
        status:"success",
    },
    {
        name:"Amal Teyeb",
        picture:PictureAmal,
        status:"success",
    },
    {
        name:"Ghaith",
        picture:PictureGhaith,
        status:"success",
    },
    {
        name:"Ameni Abed",
        picture:PictureAmeni,
        status:"success",
    },
    {
        name:"Zaineb Daboussi",
        picture:PictureZaineb,
        status:"success",
    },
    {
        name:"Emna Chafouk",
        picture:PictureEmna,
        status:"success",
    },
    {
        name:"Fatma Chafouk",
        picture:PictureFatma,
        status:"success",
    },
    {
        name:"Hajer Lasmer",
        picture:PictureHajer,
        status:"success",
    },
    {
        name:"Atef Mejri",
        picture:PictureAtef,
        status:"success",
    },
    {
        name:"Nes Rine",
        picture:PictureNesrine,
        status:"success",
    },
    {
        name:"Seif Medini",
        picture:PictureSeif,
        status:"success",
    }
  ];

function SidebarRight(){
    return(
        <div className="SidebarRight">
            <FriendsOnline friends={friends} />
            <div className="friends-search">
                <BasicSearch />
            </div>
        </div>
    )
}

export default SidebarRight
