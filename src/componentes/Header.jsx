import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className="barraHeader" >

               <div className="navbar-logo">
                <img src="https://creamy.vtexassets.com/arquivos/creamyheaderlogoredesigner.svg"></img>
               </div>

              <ul className="navbar-menu" >
                    <Link to="/home" className="sublinhado">
                        <li>Home</li>
                    </Link>
                    <Link to="/produto" className="sublinhado">
                        <li>Produtos</li>
                    </Link>
                    <Link to="/oferta" className="sublinhado">
                        <li>Ofertas</li>
                    </Link>
              </ul>
            </nav>
            
        </header>
    )
}