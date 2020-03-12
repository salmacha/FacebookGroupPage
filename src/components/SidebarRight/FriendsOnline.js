import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import PictureProfile from './rania.jpg';
import './FriendsOnline.css';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Badge } from 'antd';

function FriendsOnline(props){
    return(
        <div>
            {props.friends && props.friends.map((friend, index)=>(
                <div className="FriendsOnline">
                    <div className="profile"><Avatar size={34} src={friend.picture}/></div>
                    <div className="name"><span>{friend.name}</span></div>
                    <div className="status"><Badge status={friend.status} /></div>
                </div>
            ))}
        </div>
    )
}

export default FriendsOnline
