import React from "react";

function Sum({number1, number2}){
    const result = number1 + number2

    return (
        <p>A soma de {number1} e {number2} é igual a {result}</p>
    )
}

export default Sum