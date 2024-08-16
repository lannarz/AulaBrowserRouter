import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import { useState } from "react";

export default function Oferta(){
    const[listaCare] = useState([
        {
            id:1,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157048-768-768/01.jpg?v=638445769587500000",
            titulo: "ÁCIDO CLICÓLICO",
            valor: "R$67,99"
        },
        {
            id:2,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157076-768-768/01.jpg?v=638446441656470000",
            titulo: "EYE CREAM - ANTIRRUGAS",
            valor: "R$107,91"
        },
        {
            id:3,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157090-768-768/01.jpg?v=638446462942770000",
            titulo: "SÉRUM ANTI-AGING",
            valor: "R$55,92"
        },
        {
            id:4,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157020-768-768/01.jpg?v=638439495210800000",
            titulo: "CREME CAPILAR",
            valor: "R$62,91"
        },
        {
            id:5,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157156-300-300/01.jpg?v=638519985931430000",
            titulo: "DUO PEEL + NAICINAMIDE",
            valor: "R$167,92"
        },
        {
            id:6,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156989-768-768/01.jpg?v=638433751067770000",
            titulo: "ÁCIDO LÁTICO",
            valor: "R$70,90"
        },
        {
            id:7,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156626-768-768/01--16-.png?v=638234916979900000",
            titulo: "MINI CALMING CREAM",
            valor: "R$29,90"
        },
        {
            id:8,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156803-300-300/01.png?v=638398142380230000",
            titulo: "DUO SOLAR + VITAMINA C",
            valor: "R$147,02"
        },
    ]);    
    return(

        <>
        <Header/>

        <h2 className="titulopagina">Ofertas</h2>
            <div>
               <ListarProdutos produtos={listaCare} />
            </div>

        <Footer/>    
        </>
    )
}