import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav>
              <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/produto">
                        <li>Produto</li>
                    </Link>
                    <Link to="/oferta">
                        <li>Ofertas</li>
                    </Link>
              </ul>
            </nav>
            
        </header>
    )
}