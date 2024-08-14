import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos.jsx";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";
import "./../script.js";
import { useState } from "react";

export default function Home(){

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
            <h3 className="titulopagina">Home</h3>
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
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/2160a549-4b1d-43db-86a7-d552e02c34b0___5610cdebfb5a46fdc4c50dc5a239dd1e.jpg"/>
               </div>  
               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/7607654c-b733-48a6-aa2e-c0e1f5a680fa___66218b59a8b01fa0335bed8273658e4a.jpg"/>
               </div> 

               <div>
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/2d7f4cf0-4075-40e7-bbc6-43b75dade0c7___5a46ebd4ea820e2dd87af87ee7091eff.jpg"/>
               </div>  
            </Carousel>

            <div>
               <ListarProdutos produtos={listaCare} />
            </div>

            <Footer/>
        </>      
    )
}