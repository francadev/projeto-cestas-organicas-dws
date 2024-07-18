const allProducts = [
    { name: 'Tomate', description: 'Tomate carnem', image: 'assets/images/tomato.png' },
    { name: 'Batata', description: 'Batata inglesa', image: 'assets/images/tomato.png' },
    { name: 'Cenoura', description: 'Cenoura orgânica', image: 'assets/images/tomato.png' },
    { name: 'Alface', description: 'Alface crespa', image: 'assets/images/tomato.png' },
    { name: 'Pepino', description: 'Pepino japonês', image: 'assets/images/tomato.png' },
    { name: 'Abóbora', description: 'Abóbora cabotiá', image: 'assets/images/tomato.png' },
    { name: 'Pimentão', description: 'Pimentão verde', image: 'assets/images/tomato.png' },
    { name: 'Berinjela', description: 'Berinjela roxa', image: 'assets/images/tomato.png' },
    { name: 'Cebola', description: 'Cebola branca', image: 'assets/images/tomato.png' },
    { name: 'Alho', description: 'Alho roxo', image: 'assets/images/tomato.png' }
];


function loadPage(){
    const products = document.getElementById("products")


    allProducts.forEach(product => {
        const productHTML = `
            <div class="card-product">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <img src="${product.image}" alt="" class="product-img">
                <button>Adicionar</button>
            </div>`;

            products.innerHTML += productHTML
    });
}