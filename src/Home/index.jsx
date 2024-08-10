import Header from "../componentes/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
                    <img src=""/>
               </div> 
               <div>
                    <img src=""/>
               </div>     
            </Carousel>
        </>      
    )
}