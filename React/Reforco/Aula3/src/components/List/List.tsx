import ItemList from "../ItemList/ItemList.tsx"

function List() {
    return (
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <ItemList text="Monarca das Sombras" nome="Sung-Jin Woo" idade={25}/>
                <ItemList text="Hokage" nome="Tobirama" idade={45}/>
                <ItemList text="Rei dos Piratasa" nome="Gol D. Roger" idade={56}/>
                <ItemList/>
            </ul>   
        </div>
    )
}

export default List