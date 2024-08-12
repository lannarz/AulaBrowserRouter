import Header from "../componentes/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";

export default function Home(){
    return(
        <>
            <Header/>
            <h1>Home</h1>
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
                    <img src="https://creamy.vtexassets.com/assets/vtex.file-manager-graphql/images/826183e7-9280-46fa-9e26-702272dde4cd___bc63d95b514e4c6966dc58ca0890f317.jpg"/>
               </div>  
            </Carousel>
        </>      
    )
}