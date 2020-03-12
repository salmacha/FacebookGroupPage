import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import searchIcon from './search-icon.PNG';
import facebookIcon from './facebook-icon.PNG';
//import HeaderImg from './HeaderPicture.png';
import './Search.css';

function Search(){
    return(
        <div className="Search">
            <div className="logo">
                <img src={facebookIcon} className="facebook-icon" alt="Bloc-Notes" />
            </div>
            <div className="Search-input">
                <input className="in-search" type="text" name="" placeholder="Search"></input>
                <input type="submit" name="" value="S">
                    {/* <img src={searchIcon} className="facebook-icon" alt="Bloc-Notes" /> */}
                </input>
            </div>
        </div>
    )
}

export default Search
