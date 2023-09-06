//import "../../assets/styles/header.css"
import { useNavigate, useLocation } from "react-router-dom";
import BackPage from "../../components/controls/BackPage";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Проверяем, является ли текущий путь страницей регистрации
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return null; // Если это страница регистрации, не отображаем навигацию
    }

    const handleLogout = () => {
      // Очищаем токен и перенаправляем пользователя на страницу авторизации
      window.location.hash = '';
      localStorage.removeItem('token');
      navigate("/login")
    };

    return(
        <div className="w-full h-80 bg-componentBg flex justify-between items-center px-8 sticky top-0 right-0">
            <div className="relative z-20 w-5/12">
                {
                    location.pathname !== '/' && location.pathname !== '/login' ?
                    <BackPage /> : null
                }
            </div>
            
            
          <button 
                onClick={handleLogout}
                className="rounded-[40px] border-[3px] border-white
                 text-white text-lg font-bold py-1.5 px-7 cursor-pointer
                 hover:text-[#28D4D0] hover:border-[#28D4D0]
                 "
            >
                Log out
            </button>
        </div>
    )
}
export default Header;
