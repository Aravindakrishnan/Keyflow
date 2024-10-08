import "./Navbar.css";
export default function Navbar({title}) {
    return(
        <nav className="navbar">
            <div className="nav__header">
                <h1 className="nav__title">{title}</h1>
            </div>
        </nav>
    ) 
}