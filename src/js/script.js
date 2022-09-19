const ul = document.querySelector('.containerListaProdutos ul');
const listaOrdenada = document.querySelector('.componentesLista');
const containerPrecoTotal = document.querySelector('.containerPrecoTotal');
const containerCarrinho = document.getElementById("containerCarrinho")


function montarListaProdutos(listaProdutos) {

    ul.innerHTML = '';    

    listaProdutos.forEach((produtos) => {
        const li = document.createElement('li');       
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol')
        const button = document.createElement('button')
        button.className = 'buttonComprar'        
        button.innerText = 'Adicionar ao Carrinho'        

        // Adicionando dados do produto aos elementos
        button.setAttribute("data-id", produtos.id)
        img.src = produtos.img;
        img.alt = produtos.nome;
        h3.innerText = produtos.nome;
        p.innerText = produtos.preco;
        span.innerText = produtos.secao;
        
        
        for(let i = 0; i < produtos.componentes.length; i++){
            const listaComponentes = document.createElement('li')
            listaComponentes.innerText = produtos.componentes[i]
            ol.appendChild(listaComponentes)
        }      


        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);   
        li.appendChild(ol)
        li.appendChild(button)

        // Adicionando li ao HTML     
        ul.appendChild(li);                     
        
    });
}
montarListaProdutos(produtos)


// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
const buscarPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
const input = document.querySelector('.campoBuscaPorNome');
const preco = document.querySelector('p');
const precoTotal = document.getElementById('precoTotal')



function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produtos) => {
        return produtos.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti);
          
}

function mostrarTodos(){
    precoProdutos(produtos)
     return montarListaProdutos(produtos);
        
}

function mostrarPorNome(){
    let texto = input.value;
    const inputName = produtos.filter((produtos) => {
        return produtos.nome.toLowerCase() === texto.toLowerCase() || produtos.secao.toLowerCase() === texto.toLowerCase();
    });

    montarListaProdutos(inputName)
    
}

const botaoComprar = document.querySelector('.buttonComprar');
const adicionarAoCarrinho = document.querySelectorAll('button');
const templateProduto = document.querySelector('.produtoTemplate');

for(let i = 0; i< adicionarAoCarrinho.length; i++){  
    adicionarAoCarrinho[i].addEventListener("click", interceptandoCarrinho)    
  }

function interceptandoCarrinho(evt){ 
    const comprar = evt.target
    let produtoId = comprar.getAttribute("data-id")       
    renderizarCarrinho(produtoId)       
}

let arrayCarrinho = []

function renderizarCarrinho(id){
    let produtoCarrinho = produtos.find(idProduto => idProduto.id == id)    
    arrayCarrinho.push(produtoCarrinho)
    console.log(arrayCarrinho)
    
    listarCarrinho(arrayCarrinho)
    precoProdutos(arrayCarrinho)
    
}

function listarCarrinho(listaProdutosCarrinho){

    containerCarrinho.innerHTML = '';    

    listaProdutosCarrinho.forEach((arrayCarrinho) => {
        const li = document.createElement('li');       
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');               

        // Adicionando dados do produto aos elementos       
        img.src = arrayCarrinho.img;
        img.alt = arrayCarrinho.nome;
        h3.innerText = arrayCarrinho.nome;
        p.innerText = arrayCarrinho.preco;
        span.innerText = arrayCarrinho.secao;    


        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);       

        // Adicionando li ao HTML     
        containerCarrinho.appendChild(li);
        console.log(li)
        console.log(containerCarrinho)                
        
    }); 
}
//listarCarrinho(arrayCarrinho)

function precoProdutos(produtos){

    precoTotal.innerText = ""
    
    const valorTotal = produtos.reduce((acc, {preco}) => acc + Number(preco), 0)
    precoTotal.innerText = ` ${valorTotal}`
    
}
precoProdutos(arrayCarrinho)


// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);
botaoMostrarTodos.addEventListener('click', mostrarTodos);
buscarPorNome.addEventListener('click', mostrarPorNome);