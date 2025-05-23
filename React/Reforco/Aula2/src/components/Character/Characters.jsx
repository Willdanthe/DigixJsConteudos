 function Characters({src, nome, width, height}){
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <img 
            style={{borderRadius:'15px'}}
            src={src}
            alt={nome}
            width={width}
            height={height}
            />

            <p>{nome}</p>
            
        </div>
    )
}

export default function CardCharacters(props) { //Repassando as propriedades para não precisar repetindo ela    
    return (
        <>
            <Characters {...props}/>
        </>
    )
}