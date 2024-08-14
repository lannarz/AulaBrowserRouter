export default function ListarProdutos( {produtos}){
    return(
        <div>
            {
                produtos.map((obj)=>
                    <div key={obj.id}>
                        <p>{obj.titulo}</p>
                        <p>{obj.valor}</p>
                    </div>
                )
            }
        </div>
    )

}