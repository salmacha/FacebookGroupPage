import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import './Post.css';
import { Card, Avatar } from 'antd';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';

const { Meta } = Card;


function Pub(props){
    return(
        <div >
            {props.posts && props.posts.map((post, index)=>(
                <div className="Post">
                    <Card
                        className="OnePost"
                        actions={[
                            <LikeOutlined key="like"/>,
                            <CommentOutlined key="comment"/>
                        ]}
                    >
                        <Meta 
                        avatar={<Avatar src={post.avatar} size={50}/>}
                    title={<span className="title">{post.name}</span>}
                        description={<span className="description">{post.description}</span>}
                        />
                        
                        <img
                            // className="photo-pub"
                            src={post.picture}
                        />
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Pub
