import './ComponentQueueStyle.css';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';




const ContentQueue = () => {
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
                                        <li><Link to='#'>Search</Link></li>
                                        <li><Link to='#'>Log In</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            
        </>
    )
}

export default ContentQueue