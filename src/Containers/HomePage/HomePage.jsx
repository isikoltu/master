import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import GameCard from '../../Components/GameCard/GameCard'
import NavBar from '../../Components/Navbar/Navbar'
import "../../Style/Containers/HomePage.css"
import gameImage1 from "../../Assets/fifaposter1.jpg"
import gameImage2 from "../../Assets/gowposter.jpg"
import gameImage3 from "../../Assets/hadesposter.jpeg"
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronLeft, faChevronRight, faCoffee, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    const myRef=useRef(null)
    const slideLeft=(e)=>{
        myRef.current.scrollLeft -=300;
    };
    const slideRight=(e)=>{
        myRef.current.scrollLeft +=300;
    }
    const gameList=[
        {
            id:1,
            gameName:'Fifa 2021',
            gameCompany:'EA Sports',
            gamePlatform:'XBOX/Playstation/PC',
            gameNumbers:"13423",
            gameImage:gameImage1

        },
        {
            id:2,
            gameName:'God Of War 2019',
            gameCompany:'Santa Monica Studios',
            gamePlatform:'Playstation/PC',
            gameNumbers:"42142",
            gameImage:gameImage2

        },
        {
            id:3,
            gameName:'Hades',
            gameCompany:'SuperGiant Games',
            gamePlatform:'Xbox/Playstation/Switch/PC',
            gameNumbers:"7870",
            gameImage:gameImage3

        },
        {
            id:4,
            gameName:'Fifa 2021',
            gameCompany:'EA Sports',
            gamePlatform:'XBOX/Playstation/PC',
            gameNumbers:"13423",
            gameImage:gameImage1

        },
        {
            id:5,
            gameName:'God Of War 2019',
            gameCompany:'Santa Monica Studios',
            gamePlatform:'Playstation/PC',
            gameNumbers:"42142",
            gameImage:gameImage2

        },
        {
            id:6,
            gameName:'Hades',
            gameCompany:'SuperGiant Games',
            gamePlatform:'Xbox/Playstation/Switch/PC',
            gameNumbers:"7870",
            gameImage:gameImage3

        },
        {
            id:5,
            gameName:'God Of War 2019',
            gameCompany:'Santa Monica Studios',
            gamePlatform:'Playstation/PC',
            gameNumbers:"42142",
            gameImage:gameImage2

        },
        {
            id:6,
            gameName:'Hades',
            gameCompany:'SuperGiant Games',
            gamePlatform:'Xbox/Playstation/Switch/PC',
            gameNumbers:"7870",
            gameImage:gameImage3

        },
        {
            id:5,
            gameName:'God Of War 2019',
            gameCompany:'Santa Monica Studios',
            gamePlatform:'Playstation/PC',
            gameNumbers:"42142",
            gameImage:gameImage2

        },
        {
            id:6,
            gameName:'Hades',
            gameCompany:'SuperGiant Games',
            gamePlatform:'Xbox/Playstation/Switch/PC',
            gameNumbers:"7870",
            gameImage:gameImage3

        },
    ]
    const topBuggers=[
        {
            id:1,
            name:'Jaiwanth Shanmugam',
            Status:'Active',
            bugsCount:'8993'
        },
        {
            id:2,
            name:'Vailesh Ram',
            Status:'Active',
            bugsCount:'2340'
        },
        {
            id:3,
            name:'Vaibhav Kanna',
            Status:'Not-Active',
            bugsCount:'352'
        },
        {
            id:4,
            name:'Bala Achudhan',
            Status:'Active',
            bugsCount:'64325'
        },
        {
            id:5,
            name:'Jaiwanth Shanmugam',
            Status:'Active',
            bugsCount:'8993'
        },
        {
            id:6,
            name:'Vailesh Ram',
            Status:'Active',
            bugsCount:'2340'
        },
        {
            id:7,
            name:'Vaibhav Kanna',
            Status:'Not-Active',
            bugsCount:'352'
        },
        {
            id:8,
            name:'Bala Achudhan',
            Status:'Active',
            bugsCount:'64325'
        },
        {
            id:9,
            name:'Jaiwanth Shanmugam',
            Status:'Active',
            bugsCount:'8993'
        },
        {
            id:10,
            name:'Vailesh Ram',
            Status:'Active',
            bugsCount:'2340'
        },
        {
            id:11,
            name:'Vaibhav Kanna',
            Status:'Not-Active',
            bugsCount:'352'
        },
        {
            id:12,
            name:'Bala Achudhan',
            Status:'Active',
            bugsCount:'64325'
        },
        {
            id:13,
            name:'Jaiwanth Shanmugam',
            Status:'Active',
            bugsCount:'8993'
        },
        {
            id:14,
            name:'Vailesh Ram',
            Status:'Active',
            bugsCount:'2340'
        },
        {
            id:15,
            name:'Vaibhav Kanna',
            Status:'Not-Active',
            bugsCount:'352'
        },
        {
            id:16,
            name:'Bala Achudhan',
            Status:'Active',
            bugsCount:'64325'
        },
    ]
    
    return (
        <div className="home-page">
            <NavBar/>
            <div className='homepage-content'>
                <div>
                    <div className='banner-text'>Make your favorite games even better!</div>
                    <div className='banner-text-small'>Help as a community to help make your favorite games even better. Report bugs and issues directly to the developers.</div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                
                    <Button style={{backgroundColor:'white', border:'none'}}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{width:'30px', height:'30px'}} onClick={(e)=>slideLeft(e)}/>
                    </Button>
                    <div style={{display:'flex',flexDirection:'row' , overflowX:'auto'}} ref={myRef}>
                        {gameList.map((data)=>(
                        <GameCard
                            gameName={data.gameName}
                            gameCompany={data.gameCompany}
                            gamePlatform={data.gamePlatform}
                            gameNumbers={data.gameNumbers}
                            gameImage={data.gameImage}
                         />
                    ))}
                    </div>
                <Button style={{backgroundColor:'white', border:'none'}}>
                    <FontAwesomeIcon icon={faChevronRight} style={{width:'30px', height:'30px'}} onClick={(e)=>slideRight(e)}/>
                </Button>    
                    
                </div>
                <div className='homepage-lists'>
                    <div className='top-buggers-list'>
                        <div className='top-buggers-list-header'> Top Buggers</div>
                        {topBuggers.map((data)=>(
                            <div className='top-buggers-list-content'>
                                <FontAwesomeIcon icon={faUser} style={{width:'30px', height:'30px' , marginRight:'20px', color:'gray'}}/>
                                <div style={{fontSize:'20px', fontWeight:'600', width:'300px'}} ><span >{data.name}</span></div>
                                <div style={{fontSize:'20px', fontWeight:'600', width:'200px'}} ><span >{data.Status}</span></div>
                                <div style={{fontSize:'20px', fontWeight:'600', width:'150px'}} ><span >{data.bugsCount}</span></div>
                                <FontAwesomeIcon icon={faChevronCircleRight} style={{width:'20px', height:'20px'}}/>
                            </div>
                        ))}
                    </div>
                    <div className='top-games-list'>
                    <div className='top-buggers-list-header'> Top Games</div>
                        {gameList.map((data)=>(
                            <div className='top-buggers-list-content'>
                                <img src={data.gameImage} style={{width:'40px', height:'40px' , marginRight:'20px', borderRadius:'50%'}}/>
                                <div style={{fontSize:'20px', fontWeight:'600', width:'200px'}} ><span >{data.gameName}</span></div>
                                <div classname="text-ellipsis" style={{fontSize:'20px', fontWeight:'600', width:'200px', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}} ><span >{data.gameCompany}</span></div>
                                <div style={{fontSize:'20px', fontWeight:'600', width:'150px'}} ><span >{data.gameNumbers}</span></div>
                                <FontAwesomeIcon icon={faChevronCircleRight} style={{width:'20px', height:'20px'}}/>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage
