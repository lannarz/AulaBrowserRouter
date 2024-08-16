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
                    </div>
                    </div>
                        
                    </div>
                )
            }
        </div>
    )

}