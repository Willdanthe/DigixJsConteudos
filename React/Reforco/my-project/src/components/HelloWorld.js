import LoremParagraph from './LoremParagraph.js'
import React from 'react'
function HelloWorld(props){
    return (
        <div>
            <h1> Meu primeiro Componente em {props.name}</h1>
            <LoremParagraph/>
        </div>
    )

}

export default HelloWorld