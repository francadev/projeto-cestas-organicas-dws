import {getCollection} from './databaseConnection.js';

function loadIndexPage(){
    async function fetchProducts() {
        try {
            const productsHTML = document.getElementById("products")
            const products = await getCollection();
            
            products.forEach(product => {

                const productHTML = `
                <div class="card-product">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <img src="${product.img}" alt="" class="product-img">
                    <button>Adicionar</button>
                </div>`;

                productsHTML.innerHTML += productHTML
            });
        } catch (error) {
            console.error("Erro ao obter a coleção de produtos:", error);
        }
    }

    fetchProducts()
}

document.addEventListener('DOMContentLoaded', function() {
    loadIndexPage()
});