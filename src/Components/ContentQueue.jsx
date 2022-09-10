import './CQS.css';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import SearchQuere from './SearchQuere';
import { useState, useContext } from 'react'
import PlaylistContext from "../Context/Notes/PlaylistContext";




const ContentQueue = ({ triggerFun, triggerVal }) => {
    // context
    const {songData} = useContext(PlaylistContext);

    const [popupstate, setPopupstate] = useState('popup-disable')
    const popupInvoke = () => {
        if (popupstate === 'popup-disable')
            setPopupstate('popup')
        else{
            setPopupstate('popup-disable'); 
            triggerFun(!triggerVal)
        }
        // console.log('popup invoked ',popupstate);
    }
    return (
        <>
            <header>
                <nav>
                    <div className="navbar">
                        <ul>
                            <li>
                                <div className='navbar1'>
                                    <ul>
                                        <li><Link to='#'>Home</Link></li>
                                        <li><Link to='#'>My Playlist</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="logo"><img src={logo} alt="logo" /></li>
                            <li>
                                <div className='navbar1'>
                                    <ul>
                                        <li><Link onClick={() => { popupInvoke() }} to='#'>Search</Link></li>
                                        <li><Link to='#'>Log In</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <SearchQuere state={popupstate} popupInvoke={popupInvoke} songs={songData} />
        </>
    )
}

export default ContentQueue