function ItemList({text = "item", nome = "Personagem", idade = 0}: {text?:string, nome?:string, idade?: number}) {
    return (
        <>
            <li>{text}</li>
            <p>{nome} - {idade} anos</p>
        </>
    )
}

// type ItemListProp = {
//     text? : string,
//     nome? : string,
//     idade? : number
// }

// function ItemList({text = "item", nome = "Personagem", idade = 0}: ItemListProp) {
//     return (
//         <>
//             <li>{text}</li>
//             <p>{nome} - {idade} anos</p>
//         </>
//     )
// }

// function ItemList(props: ItemListProp) {
//     return (
//         <>
//             <li>{props.text}</li>
//             <p>{props.nome} - {props.idade} anoass</p>
//         </>
//     )
// }


export default ItemList