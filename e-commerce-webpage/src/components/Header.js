import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { UserActivityContext } from "./UserActivityContext";

function Header() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const { selectedProduct} = useContext(UserActivityContext);
    return (
        <div className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <div>
                <input type="checkbox" onChange={toggleTheme} />{isDarkMode? 'Change to light mode' : 'Change to dark mode'}
            </div>
            <span>Cart({Object.values(selectedProduct).length})</span>
        </div>
    )
}

export default Header;