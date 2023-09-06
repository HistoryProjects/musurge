//import "../assets/styles/navbar.css";
import "../../index.css";

import Logo from "../../assets/Logo.svg";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import {AiTwotoneHome, AiTwotoneStar} from "react-icons/ai";
import {FiCompass} from "react-icons/fi";

import {BiSearch} from "react-icons/bi";

const Navbar = () => {
    
    const location = useLocation();
    const homeActive = location.pathname === '/' ? 'active-link' : '';
    const exploreAtive = location.pathname === '/explore' ? 'active-link' : '';
    const favoriteAtive = location.pathname === '/favorites' ? 'active-link' : '';
    const searchActive = location.pathname === '/search' ? 'active-link' : '';
   

    // Проверяем, является ли текущий путь страницей регистрации
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return null; // Если это страница регистрации, не отображаем навигацию
    }  

    return(
        <div className="Navbar w-1/5 h-100vh p-6 bg-componentBg sticky top-0 left-0">
            <Link to="/">
                <img src={Logo} alt="logo" className="block mx-auto" />
            </Link>
           

           <div className="nav-list mt-16">
                <p className="text-titleText font-medium text-lg uppercase">Menu</p><br />

                <ul>
                    <li className="mb-5">
                        <Link to="/"  className="">
       
                            <span className={`link-span hover:text-blueBg ${homeActive}`}>
                                <AiTwotoneHome className={`icon ${homeActive}`} /> Home
                            </span>
                        </Link>
                    </li>

                    <li className="mb-5">
                        <Link to="/search"  className="">
                            <span className={`link-span hover:text-blueBg ${searchActive}`}>
                                <BiSearch className={`icon ${searchActive}`} /> Search
                            </span>
                        </Link>
                    </li>
                        
                    <li className="mb-5">
                        <Link to="/explore"  className="">
       
                            <span className={`link-span hover:text-blueBg ${exploreAtive}`}>
                                <FiCompass className={`icon ${exploreAtive}`} /> Explore
                            </span>
                        </Link>
                    </li>

                    <li className="mb-5">
                        <Link to="/favorites" className="">
                            <span className={`link-span hover:text-blueBg ${favoriteAtive}`}>
                                <AiTwotoneStar className={`icon ${favoriteAtive}`} />
                                Favorites
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}
export default Navbar;

