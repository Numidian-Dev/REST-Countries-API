import { useState } from "react";
import { useRouter } from "next/router"
import { BiSearch } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";

const Search = () => {
    const [show, setShow] = useState(false)


    function toggle() {
        setShow(!show)
    }

    return (
        <div className="container-search">
            <form action="/" method="get">
                <div className="container-input">
                    <input type="search" id="search" name="search" placeholder="Search for a countrie..." />
                    <BiSearch className="search-icon" />
                </div>
            </form>
            <div className="select-contient">
                <div className="filter" onClick={() => toggle()}> <h5>Filter by Region</h5> <BsFillCaretDownFill /></div>
                <div className="region" style={{ display: show ? 'flex' : "none" }}>
                    <ul>
                        <li>Africa</li>
                        <li>America</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Search;
