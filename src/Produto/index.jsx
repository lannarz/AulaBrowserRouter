import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import { useState } from "react";


export default function Produto(){
    const[listaCare] = useState([
        {
            id:1,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156807-300-300/01.png?v=638398149288500000",
            titulo: "PROTETOR SOLAR + SÉRUM",
            valor: "R$119,80"
        },
        {
            id:2,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157066-768-768/01.jpg?v=638445776795800000",
            titulo: "EMULSÃO DE LIMPEZA",
            valor: "R$59,90"  
        },
        {
            id:3,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156934-768-768/Niacinamide-B-Complex-20---01.jpg?v=638429153103870000",
            titulo: "NIACINAMIDE",
            valor: "R$85,90"
        },
        {
            id:4,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156724-300-300/01.png?v=638337627782170000",
            titulo: "DUO GLICÓLICO + MANDÉLICO",
            valor: "R$153,80"
        },
        {
            id:5,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156922-768-768/01.png?v=638429149457670000",
            titulo: "VITAMINA C",
            valor: "R$99,90"
        },
        {
            id:11,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156953-768-768/01.jpg?v=638430855006630000",
            titulo: "ÁCIDO TRANEXÂMICO",
            valor: "R$71,91"
        },
        {
            id:7,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156995-768-768/01.jpg?v=638433753467230000",
            titulo: "RETINOL",
            valor: "R$99,90"
        },
        {
            id:8,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157070-768-768/01.jpg?v=638446358897930000",
            titulo: "CALMING CREAM",
            valor: "R$49,90"
        },
        {
            id:9,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156808-300-300/01.png?v=638398150752630000",
            titulo: "DUO PROTETOR + CREAM",
            valor: "R$109,80"
        },
        {
            id:10,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157188-768-768/carrossel---limpador-glicerinado---01.jpg?v=638556983363730000",
            titulo: "GEL FACIAL GLICELINADO",
            valor: "R$59,90"
        },
    
        {
            id:11,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156690-768-768/01.png?v=638291841499830000",
            titulo: "VITAMINA C",
            valor: "R$99,90"
        },
        {
            id:12,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157218-768-768/latte.png?v=638582113500230000",
            titulo: "LIP BALM LATTE 10G",
            valor: "R$36,90"
        },
        {
            id:13,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157048-768-768/01.jpg?v=638445769587500000",
            titulo: "ÁCIDO CLICÓLICO",
            valor: "R$67,99"
        },
        {
            id:14,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157076-768-768/01.jpg?v=638446441656470000",
            titulo: "EYE CREAM - ANTIRRUGAS",
            valor: "R$107,91"
        },
        {
            id:15,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157090-768-768/01.jpg?v=638446462942770000",
            titulo: "SÉRUM ANTI-AGING",
            valor: "R$55,92"
        },
        {
            id:16,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157020-768-768/01.jpg?v=638439495210800000",
            titulo: "CREME CAPILAR",
            valor: "R$62,91"
        },
        {
            id:17,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/157156-300-300/01.jpg?v=638519985931430000",
            titulo: "DUO PEEL + NAICINAMIDE",
            valor: "R$167,92"
        },
        {
            id:18,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156989-768-768/01.jpg?v=638433751067770000",
            titulo: "ÁCIDO LÁTICO",
            valor: "R$70,90"
        },
        {
            id:19,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156626-768-768/01--16-.png?v=638234916979900000",
            titulo: "MINI CALMING CREAM",
            valor: "R$29,90"
        },
        {
            id:20,
            imagem: "https://creamy.vtexassets.com/arquivos/ids/156803-300-300/01.png?v=638398142380230000",
            titulo: "DUO SOLAR + VITAMINA C",
            valor: "R$147,02"
        },
    ]);    



    return(
        <>
        <Header/>

        <h2 className="titulopagina">Produtos</h2>

        <div>
            <ListarProdutos produtos={listaCare} />
        </div>
        
        <Footer/>
        </>
    )
}