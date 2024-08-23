import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import { useState } from "react";

export default function Oferta(){
    const[listaCare] = useState([
        {
            id:1,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157048-768-768/01.jpg?v=638445769587500000",
            titulo: "ÁCIDO GLICÓLICO",
            valor: "R$67,99",
            categoria: "Ácido",
            Indicacoes: ["Pele com manchas", "Pele jovem", "Pele acneica"]
        },
        {
            id:2,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157076-768-768/01.jpg?v=638446441656470000",
            titulo: "EYE CREAM - ANTIRRUGAS",
            valor: "R$107,91",
            categoria: "Creme",
            Indicacoes: ["Pele com muitas linhas finas", "Pele madura", "Pele ressecada"]
        },
        {
            id:3,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157090-768-768/01.jpg?v=638446462942770000",
            titulo: "SÉRUM ANTI-AGING",
            valor: "R$55,92",
            categoria: "Sérum",
            Indicacoes: ["Pele com muitas linhas finas", "Pele madura"]
        },
        {
            id:4,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157020-768-768/01.jpg?v=638439495210800000",
            titulo: "CREME CAPILAR",
            valor: "R$62,91",
            categoria: "Tratamento Capilar",
            Indicacoes: ["Cabelos ressecados", "Cabelos opacos", "Cabelos danificados"]
        },
        {
            id:5,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157156-300-300/01.jpg?v=638519985931430000",
            titulo: "DUO PEEL + NAICINAMIDE",
            valor: "R$167,92",
            categoria: "Duo",
            Indicacoes: ["Pele jovem", "Pele sensível", "Pele madura", "Pele com manchas"]
        },
        {
            id:6,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156989-768-768/01.jpg?v=638433751067770000",
            titulo: "ÁCIDO LÁTICO",
            valor: "R$70,90",
            categoria: "Ácido",
            Indicacoes: ["Pele jovem", "Pele acaneica", "Pele com manchas", "Pele sensível"]
        },
        {
            id:7,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156626-768-768/01--16-.png?v=638234916979900000",
            titulo: "MINI CALMING CREAM",
            valor: "R$29,90",
            categoria: "Creme",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele ressecada"]
        },
        {
            id:8,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156803-300-300/01.png?v=638398142380230000",
            titulo: "DUO SOLAR + VITAMINA C",
            valor: "R$147,02",
            categoria: "Duo",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele manchada"]
        },
        {
            id:9,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156808-300-300/01.png?v=638398150752630000",
            titulo: "DUO PROTETOR + CREAM",
            valor: "R$109,80",
            categoria: "Duo",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele ressecada"]
        },
        {
            id:10,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157188-768-768/carrossel---limpador-glicerinado---01.jpg?v=638556983363730000",
            titulo: "GEL FACIAL GLICELINADO",
            valor: "R$59,90",
            categoria: "Sabonete Facial",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele ressecada"]
        },
    
        {
            id:11,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156690-768-768/01.png?v=638291841499830000",
            titulo: "VITAMINA C",
            valor: "R$99,90",
            categoria: "Sérum",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele com manchas"]
        },
        {
            id:12,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157218-768-768/latte.png?v=638582113500230000",
            titulo: "LIP BALM LATTE 10G",
            valor: "R$36,90",
            categoria: "Hidratante facial",
            Indicacoes: ["Pele jovem", "Pele madura", "Pele sensível", "Pele com manchas"]
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