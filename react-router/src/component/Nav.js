import { Link, NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <Link to="/" state={{value:123}}>[ {" "}HOME] {" "}</Link>
            <Link to="/users">[ALL USER]</Link>
            <Link to="/users/123">[USER 123]</Link>
            <Link to="/users/me"> [USER ME]</Link>
            <NavLink state={{val: 456 }} to="loc?id=234&name=bob#someHashValue" style={({isActive}) => ({color: isActive? 'red' : 'gold'})} className={({isActive}) => {/*whatever logic you like*/}} >[Location]</NavLink>
        </nav>
    )
}

export default Nav