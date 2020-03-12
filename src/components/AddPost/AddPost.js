import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import './AddPost.css';
import { Card, Avatar } from 'antd';
import Picture from './picture.jpg'
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;


function AddPost(props){
    return(
        <div className="couverture">
            <Card
                className="card-cou"
                actions={[
                    <div>
                        <Button className="button-add" type="primary" shape="round">Photo/Vidéo</Button>
                        <Button className="button-add" type="primary" shape="round">Séance vidéo</Button>
                        <Button className="button-add" type="primary" shape="round">Identifier des...</Button>
                        <Button className="button-add" type="primary" shape="round">...</Button>
                    </div>
                    
                    // <LikeOutlined key="like"/>,
                    // <CommentOutlined key="comment"/>
                ]}
            >
                <Meta 
                    avatar={<Avatar src={Picture} size={50}/>}
                    title={<span className="text-post">Exprimez-vous</span>}
                />
                {/* <img
                    className="photo-cou"
                    src={Picture}
                /> */}
            </Card>
        </div>
    )
}

export default AddPost
