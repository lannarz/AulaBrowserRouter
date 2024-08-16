import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos.jsx";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";
import { useState } from "react";

export default function Home(){

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
        
    ]);    
return(
        <>
            <Header/>
            
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/f63d8dd4-3368-4905-9d63-3f66fdbbd359___62025b692c7ac59eb122f6e03676d600.jpg"/>
               </div> 
               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/7607654c-b733-48a6-aa2e-c0e1f5a680fa___66218b59a8b01fa0335bed8273658e4a.jpg"/>
               </div> 
               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/2160a549-4b1d-43db-86a7-d552e02c34b0___5610cdebfb5a46fdc4c50dc5a239dd1e.jpg"/>
               </div> 
               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/2d7f4cf0-4075-40e7-bbc6-43b75dade0c7___5a46ebd4ea820e2dd87af87ee7091eff.jpg"/>
               </div>  
            </Carousel>

            <h3 className="titulopagina">Destaques</h3>

            <div>
               <ListarProdutos produtos={listaCare} />
            </div>

            <Footer/>
        </>      
    )
}