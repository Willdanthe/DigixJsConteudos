import React from "react";
import './CardProduto.css'

const CardProduto = ({nome, preco, descricao, imagem}) => {
    return(
        <div className="card-Produto">
            <img src={imagem} alt={nome} width={300} height={300}/>
            <h2>{nome}</h2>
            <p className="preco">R$ {preco.toFixed(2)}</p>
            <p className="descricao">{descricao}</p>
        </div>
    );
}

export default CardProduto;