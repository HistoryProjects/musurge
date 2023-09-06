//import "./login.css";
import {loginUrl} from "../authParams";
import {Link} from "react-router-dom";
import Logo from '../assets/Logo.svg';

const Login = () => {
    return (
        <div className="mx-auto w-full bg-componentBg text-center h-100vh flex flex-col justify-center">
            <div className="flex flex-col items-center gap-44">
                <img src={Logo} alt="logo" width={500} height={180} />

                <button className="block w-80 h-14 rounded-[40px] bg-blueBg
                   cursor-pointer
                ">
                    <Link 
                        to={loginUrl} 
                        relative="path" 
                        className="text-white text-xl font-medium block"
                    >Login</Link>
                </button>
            </div>
        </div>
    );
  };
  
  export default Login;