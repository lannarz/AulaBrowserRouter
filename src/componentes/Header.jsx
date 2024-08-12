import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className="barraHeader" >
              <ul className="navbar-menu" >
                    <Link to="/home" className="sublinhado">
                        <li>Home</li>
                    </Link>
                    <Link to="/produto" className="sublinhado">
                        <li>Produto</li>
                    </Link>
                    <Link to="/oferta" className="sublinhado">
                        <li>Ofertas</li>
                    </Link>
              </ul>
            </nav>
            
        </header>
    )
}