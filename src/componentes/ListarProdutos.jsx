export default function ListarProdutos( {produtos}){
    return(
        <div className="quadradao">
            {
                produtos.map((obj)=>
                    <div>

                    <div className="quadradinho" key={obj.id}>
                        <img className="img-produtos" src={obj.imagem}/>

                    <div className="separar">
                        <p className="titulo-produto">{obj.titulo}</p>
                        <p className="valor-produto">{obj.valor}</p>
                        <img className="star" src="src/imagem/star.png"/>
                    </div>

    

                
                    <div className="container">
                        <div className="div1"><p className="arruma">Saiba mais</p></div>
                        <div className="div2"><img className="carrinho" src="src/imagem/carrinho.png"/></div>
                    </div>

                    </div>
                        
                    </div>
                )
            }
        </div>
    )

}