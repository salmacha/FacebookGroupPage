import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import BasicSearch from './../BasicSearch/BasicSearch'
//import HeaderImg from './HeaderPicture.png';
import './SidebarLeft.css';
import { CaretDownOutlined, LockFilled } from '@ant-design/icons';

function SidebarLeft(){
    return(
        <div className="Menu">
            <h1>ING2 -INLOG -INREV</h1>
            <h5><LockFilled />     Groupe Privé</h5>
            <ul className="Menu_ul">
                <li><a href="#">À propos</a></li>
                <li><a href="#">Discussion</a></li>
                <li><a href="#">Membres</a></li>
                <li><a href="#">Évènements</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">Fichiers</a></li>
                <li><a href="#">Séance vidéo</a></li>
            </ul>
            <div className="search-menu"><BasicSearch /></div>
            <br/>
            <br/>
            <h5>Raccourcis</h5>
            <ul className="Menu_ul">
                <li>
                    <div className="group">
                        <div className="group-img">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/hm4q__94FyM.png"/>
                        </div>
                        <div className="group-lien">
                            <a href="#">2 ING ISAMM 2020</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group">
                        <div className="group-img">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/hm4q__94FyM.png"/>
                        </div>
                        <div className="group-lien">
                            <a href="#">PFA SBA 2020</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group">
                        <div className="group-img">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/hm4q__94FyM.png"/>
                        </div>
                        <div className="group-lien">
                            <a href="#">GL SBA 2020</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group">
                        <div className="group-img">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/hm4q__94FyM.png"/>
                        </div>
                        <div className="group-lien">
                            <a href="#">React 2020</a>
                        </div>
                    </div>
                </li>
            </ul>
            <h5><CaretDownOutlined />   Voir plus</h5>
        </div>
    )
}

export default SidebarLeft
