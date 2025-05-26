import React from "react";
import styles from "./CardProduto.module.css"

const CardProduto = ({nome, preco, descricao, imagem}) => {
    return(
        <div className={styles.cardProduto}>
            <img src={imagem} alt={nome} width={300} height={300}/>
            <h2>{nome}</h2>
            <p className={styles.preco}>R$ {preco.toFixed(2)}</p>
            <p className={styles.descricao}>{descricao}</p>
        </div>
    );
}

export default CardProduto;



