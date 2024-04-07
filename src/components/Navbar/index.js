import {Link} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown,FaBars  } from "react-icons/fa";
import "./index.css"

const tabsList = [
    {id:"shop",tabName:"SHOP"},
   {id:"skill",tabName:"SKILL"},
    {id:"stories",tabName:"STORIES"},
    {id:"about",tabName:"ABOUT"},
    {id:"contact",tabName:"CONTECT US"}
]

const Navbar = ()=>(
    <nav>
        <div className="nav-top-section">
            <FaBars size={25} className="side-bar"/>
            <img src="https://res.cloudinary.com/dpgoeszn9/image/upload/v1712487848/AppScriptLogo_fym0fe.png" alt="logo image" className="logo-image"/>
            <h1 className="logo-text">LOGO</h1>
            <ul className="options-list">
                <li>
                    <CiSearch size={25}/>
                </li>
                <li>    
                    <MdOutlineFavoriteBorder size={25}/>
                </li>
                <li>   
                    <IoBagOutline size={25}/>
                </li>    
                <li>    
                    <CgProfile size={25}/>
                </li>
                <li className="lang-block">
                    <p>ENG</p>
                    <FaAngleDown size={25}/>
                </li>
            </ul>
        </div>
        <ul className="tabs-container">
           {tabsList.map(each=>(
            <li>
                <Link to={`/${each.id}`} className="link-style">
                {each.tabName}
                </Link>
            </li>
           ))}
        </ul>
        
    </nav>

)


export default Navbar