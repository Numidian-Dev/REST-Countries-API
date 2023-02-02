import { BsFillMoonFill } from "react-icons/bs";
const Header = () => {
    return (
        <header>
            <div className="container-header">
                <div className="logo"><h1>Where in the world?</h1></div>
                <button className="darkMode"> <BsFillMoonFill className="moon" /> Dark Mode</button>
            </div>

        </header>
    )
}

export default Header