import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiQrCodeLine, RiSlideshow2Line } from "react-icons/ri";
import Logo from '../../assets/images/logo.png'
import './menu.scss';

interface MenuProps {
    theme?: "light" | "dark",
}

const Menu: React.FC<MenuProps> = ({ theme }) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const navigate = useNavigate();

    const handleActionMenu = () => {
        setIsOpen(state => !state);
    }

    return (
        <nav>
            <div className="logoMenu">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <div className={isOpen ? `links ${theme || 'dark'}` : `linksOff ${theme || 'dark'}`}>
                <div className='options'>
                    <Link to="/" onClick={handleActionMenu}>Home</Link>
                    <Link to="/">Projeto</Link>
                    <Link to="/">Sobre Nós</Link>
                    <Link to="/" id='buttonMenu'>Contato</Link>
                </div>
                <div className="iconsApresentation">
                    <RiQrCodeLine
                        id="iconShadowLink"
                        size="25px"
                        color={theme && theme === "light" ? '#fff' : '#32323285'}
                        onClick={() => navigate("/")}
                    />
                    <RiSlideshow2Line
                        id="iconShadowLink"
                        size="25px"
                        color={theme && theme === "light" ? '#fff' : '#32323285'}
                        onClick={() => navigate("/")}
                    />
                </div>
            </div>
            <div className="icons">
                {
                    isOpen
                        ? <AiOutlineClose
                            id="iconShadow"
                            size="25px"
                            color='#fff'
                            onClick={handleActionMenu}
                        />
                        :
                        <AiOutlineMenu
                            id="iconShadow"
                            size="25px"
                            color={theme && theme === "light" ? '#fff' : '#000'}
                            onClick={handleActionMenu}
                        />
                }
            </div>
        </nav>
    );
}

export default Menu;