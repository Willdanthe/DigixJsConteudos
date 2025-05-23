import './App.css';
import CardProduto from './components/CardProduto/CardProduto.jsx';

const produtos = [
  {
    nome: "Fone de ouvido Bluetooth",
    preco: 130.00,
    descricao: "Audio de alta qualidade e dura 512 horas!",
    imagem:"https://cdn.awsli.com.br/600x450/953/953953/produto/38619569/6a1963fd1c.jpg"
  },
  {
    nome: "Teclado Mecânico - RedDragon",
    preco: 244.99,
    descricao: "Melhor teclado para seus jogos!",
    imagem:"https://ecoms1.com/29609/@v3/1644518141756-71sfadtowql._ac_sy450_.jpg"
  },
  {
    nome: "Notebook Gamer Asus",
    preco: 7850.00,
    descricao: "Roda tudo que vc possa imaginar",
    imagem:"https://b2b.lojaasus.com.br/media/catalog/product/s/e/secundario_01-02_fx507_1.png"
  },
]

function App() {
    return (
      <div className='catalogo'>
        {produtos.map((produto, index) => {
        return(
          <CardProduto
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
          />
        )
        })}
      </div>
    );
}

export default App;
    
