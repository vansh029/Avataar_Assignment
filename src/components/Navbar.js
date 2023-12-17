import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import searcIcon from '../searchicon.jpg'

function Navbar({onSearch}){
    const [click, setClick]= useState(false)
    const [dropdown, setDropdown]=useState(false)
    const [query, setQuery] = useState('');
 
    const handleClick = () => setClick(!click)
    const closeMobileMenu=()=> setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
      }
      const handleSearch = () => {
        // Pass the search query to the parent component
        onSearch(query);
      };

  return (
    <>
        <nav className='navbar'>
            <Link to ='/' 
            className='navbar-logo'>
                E-COMM <i class='fab fa-firstdraft'/> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                        HOME 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/electronics' className='nav-links' onClick={closeMobileMenu}>
                        ELECTRONICS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/books' className='nav-links' onClick={closeMobileMenu}>
                        BOOKS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/music' className='nav-links' onClick={closeMobileMenu}>
                        MUSIC
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/movies' className='nav-links' onClick={closeMobileMenu}>
                        MOVIES
                    </Link>
                </li><li className='nav-item'>
                    <Link to= '/clothing' className='nav-links' onClick={closeMobileMenu}>
                        CLOTHING
                    </Link>
                </li>
                
                <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            MORE <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

        
            </ul>
        </nav> 
    </>
  )
}

export default Navbar
