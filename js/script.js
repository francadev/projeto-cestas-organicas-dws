const allProducts = [    
    { name: 'Tomate', description: 'Tomate carnem', qtd: 10, image: 'assets/images/tomato.png' },
    // { name: 'Batata', description: 'Batata inglesa', image: 'assets/images/tomato.png' },
    // { name: 'Cenoura', description: 'Cenoura orgânica', image: 'assets/images/tomato.png' },
    // { name: 'Alface', description: 'Alface crespa', image: 'assets/images/tomato.png' },
    // { name: 'Pepino', description: 'Pepino japonês', image: 'assets/images/tomato.png' },
    // { name: 'Abóbora', description: 'Abóbora cabotiá', image: 'assets/images/tomato.png' },
    // { name: 'Pimentão', description: 'Pimentão verde', image: 'assets/images/tomato.png' },
    // { name: 'Berinjela', description: 'Berinjela roxa', image: 'assets/images/tomato.png' },
    // { name: 'Cebola', description: 'Cebola branca', image: 'assets/images/tomato.png' },
    // { name: 'Alho', description: 'Alho roxo', image: 'assets/images/tomato.png' }
];

function loadIndexPage(){
    const products = document.getElementById("products")


    allProducts.forEach(product => {
        const productHTML = `
            <div class="card-product">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <img src="assets/images/tomato.png" alt="" class="product-img">
                <button>Adicionar</button>
            </div>`;

            products.innerHTML += productHTML
    });
    console.log(allProducts)
}

function loadProductPage(){
    const formCadastroProdutos = document.getElementById("formCadastroProdutos")
    

    formCadastroProdutos.addEventListener('submit', function(event){
        event.preventDefault()

        const productName = document.querySelector("#productName").value;
        const productDescription = document.querySelector("#productDescription").value;
        const productQuantity = document.querySelector("#productQuantity").value;

        let newProduct = {
            name: productName,
            description: productDescription,
            quantity: parseInt(productQuantity),
            image: 'assets/images/tomato.png'
        };

        allProducts.push(newProduct);
        console.log(allProducts);
    })
}
