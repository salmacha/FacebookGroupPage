import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import './Couverture.css';
import couverture from './couverture3.jpg';
import { Card, Avatar } from 'antd';
import { CaretDownOutlined, CheckOutlined, SendOutlined, DashOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';


const { Meta } = Card;


function Pub(props){
    return(
        <div className="couverture">
            <Card
                className="card-cou"
                actions={[
                    <div className="button-cou">
                        <Radio.Group value="large" className="button-membre">
                            <Radio.Button value="large" className="btn1">Membre    <CaretDownOutlined className="btn-icon"/></Radio.Button>
                            <Radio.Button value="default" className="btn1"><CheckOutlined className="btn-icon1"/>    Notification</Radio.Button>
                        </Radio.Group>
                        <Radio.Group value="large" className="button-partager">
                            <Radio.Button value="large" className="btn1"><SendOutlined className="btn-icon"/>    Partager</Radio.Button>
                            <Radio.Button value="default" className="btn1"><DashOutlined className="btn-icon"/>    Plus</Radio.Button>
                        </Radio.Group>
                    </div>
                    
                    // <LikeOutlined key="like"/>,
                    // <CommentOutlined key="comment"/>
                ]}
            >
                <img
                    className="photo-cou"
                    src={couverture}
                />
            </Card>
        </div>
    )
}

export default Pub
