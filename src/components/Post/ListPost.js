import React from "react"; 
import Pub from './Pub';
import PictureFarah from './farah.jpg';
import PictureYosr from './yosr.jpg';
import PictureSonia from './sonia.jpg';
import Post2 from './post2.PNG';
import Post3 from './post3.PNG';


const posts=[
    {
        name:"Mohamed Farah",
        avatar:PictureFarah,
        picture:Post2,
        // description:"Hello Salma & Amal",
    },
    {
        name:"Yosr Naija",
        avatar:PictureYosr,
        picture:Post3,
        description:"Voici un fichier contenant une documentation issue de MDN sur les tableaux et les chaînes. On en aura besoin pour la séance prochaine si on n'a pas internet en salle",
    },
    {
        name:"Sonia Mettali",
        avatar:PictureSonia,
        description:"Pour le choix de l'option nous avons fait 2 listes classées selon la moyenne de l'année dernière. Une pour les 1ère année Ingénieur et master de recherche et la seconde pour le master professionnel.",
    }
];

function ListPost(){
    return(
        <div className="ListPost">
            <Pub posts={posts} />
        </div>
    )
}

export default ListPost
