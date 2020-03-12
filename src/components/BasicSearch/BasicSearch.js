import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import './BasicSearch.css';
import { Input } from 'antd';
const { Search } = Input;

//import HeaderImg from './HeaderPicture.png';

function BasicSearch(){
    return(
        <div className="BasicSearch">
            <Search
                className="SearchN"
                placeholder="Search"
                onSearch={value => console.log(value)}
                // style={{ width: 200 }}
            />
        </div>
    )
}

export default BasicSearch
