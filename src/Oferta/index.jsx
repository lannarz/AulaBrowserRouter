import { useState } from "react";
import Header from "../componentes/Header";
import ListarProdutos from "../componentes/ListarProdutos";

export default function Oferta(){
    const[listaCare] = useState([
        {
            id:1,
            titulo: "minha maquiagem 1",
            valor: "R$50,00"
        },
        {
            id:2,
            titulo: "minha maquiagem 2",
            valor: "R$50,00"
        },
        {
            id:3,
            titulo: "minha maquiagem 3",
            valor: "R$50,00"
        }
    ]);    
    return(

        <>
        <Header/>

        <h2 className="titulopagina">Ofertas</h2>
            <div>
               <ListarProdutos produtos={listaCare} />
            </div>
        </>
    )
}