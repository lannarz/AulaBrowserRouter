import { useState } from "react";
import Header from "../componentes/Header";
import ListarProdutos from "../componentes/ListarProdutos";

export default function Oferta(){
    const[listaCare] = useState([
        {
            id:9,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157076-768-768/01.jpg?v=638446441656470000",
            titulo: "EYE CREAM - ANTIRRUGAS",
            valor: "R$107,91"
        },
        {
            id:10,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157090-768-768/01.jpg?v=638446462942770000",
            titulo: "SÉRUM ANTI-AGING",
            valor: "R$55,92"
        },
        {
            id:11,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156953-768-768/01.jpg?v=638430855006630000",
            titulo: "ÁCIDO TRANEXÂMICO",
            valor: "R$71,91"
        },
        {
            id:12,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157179-768-768/01.jpg?v=638538799268100000",
            titulo: "SÉRUM ANTI-AGING RETINAL",
            valor: "R$113,00"
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