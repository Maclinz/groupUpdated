import React from 'react'
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import logo from '../img/logo2.svg';
import discussion from '../img/discussion.svg';
import resources from '../img/resources.svg';
import learn from '../img/learn.svg';
import videos from '../img/videos.svg';

function Navigation() {
    return (
        <NavBarStytled>
            <AppBar position="fixed" color="white" boxShadow={0} elevation={0} style={{borderBottom: '2px solid var(--border-grey-color)'}} >
              <Toolbar>
                <div className="toolbar-data">
                    <div className="left-nav-items">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <a href='/home'>
                            Climate Countdown
                        </a>
                    </div>
                    <ul className="nav-items">
                        <li>
                            <a href="https://www.weforum.org/agenda/archive/climate-change/">
                                <img src={discussion} alt=""/> <span>Discussion</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://se-ed.co.uk/edu/a-collated-list-of-online-climate-change-learning-resources/">
                                <img src={resources} alt=""/> <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://se-ed.co.uk/edu/a-collated-list-of-online-climate-change-learning-resources/">
                                <img src={learn} alt=""/> <span>Learn More</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="right-nav-items nav-items">
                        <li>
                            <a href="https://www.youtube.com/watch?v=gUhxcdzRgLQ">
                                <img src={videos} alt=""/> <span>Save earth</span>
                            </a>
                        </li>
                    </ul>
                 </div>
              </Toolbar>
            </AppBar>
        </NavBarStytled>
    )
}

const NavBarStytled = styled.nav`
    min-height: 8vh;
    width: 100%;
    .toolbar-data{
        display: flex;
        align-items: center;
        width: 85%;
        margin: 0 auto;
        justify-content: space-between;
        @media screen and (max-width:1150px){
            width: 95%;
        }
        .left-nav-items{
            display: flex;
            align-items: center
        }
        a{
            color: var(--blue-color);
            font-weight: 700;
            font-size: inherit;
            padding-left: 1rem;
            text-transform: uppercase;
        }
        .logo{
            height: 100%;
            img{
                height: 3rem;
            }
        }

        .nav-items{
            display: flex;
            align-items: center;
            a{
                display: flex;
                align-items: center;
                text-transform: uppercase;
                color: var(--para-text-grey-color-2);
                transition: all .4s ease-in-out;
                margin: 0 1.5rem;
                @media screen and (max-width:703px){
                    margin: 0 1rem;
                }
                @media screen and (max-width:616px){
                    margin: 0 .5rem;
                }
                @media screen and (max-width:550px){
                    margin: 0 .1rem;
                }
                span{
                    color: inherit;
                    @media screen and (max-width:1024px){
                        display: none;
                    }
                }
                &:hover{
                    color: var(--para-text-grey-color-3);
                }
                img{
                    height: 1.5rem;
                    padding-right: 1rem;
                }
            }
        }
    }
    
`;

export default Navigation;
