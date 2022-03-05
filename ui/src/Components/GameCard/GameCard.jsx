import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/Components/GameCard.css"
import gameImage1 from "../../Assets/fifaposter1.jpg"
import gameImage2 from "../../Assets/gowposter.jpg"



const  GameCard=(props)=> {
    return (
        
        <div className="gamecard">
            <div className="gamecard-image">
                <div className="img-overlay"></div>
                <img className="image" src={props.gameImage} style={{width:"100%", height:'100%',maxWidth:'100%' , maxHeight:'100%' , borderRadius:"28px",background: "rgba(0, 0, 0, .6)"}} />
            </div>
            <div className='gamecard-details'>
                <div className='gamecard-name'>{props.gameName}</div>
                <div className='gamecard-company'>{props.gameCompany}</div>
                <div className='gamecard-platform'>{props.gamePlatform}</div>
                <div className='gamecard-numbers'>Active bugs : {props.gameNumbers}</div>
            </div>

        </div>
        
        
    )
}

export default GameCard
