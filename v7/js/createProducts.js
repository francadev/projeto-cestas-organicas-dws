import {createProduct} from './databaseConnection.js'

function loadProductPage(){
    const formCadastroProdutos = document.getElementById("formCadastroProdutos")
    
    formCadastroProdutos.addEventListener('submit', async function(event){
        event.preventDefault()

        const productName = document.querySelector("#productName").value;
        const productDescription = document.querySelector("#productDescription").value;
        const productQuantity = document.querySelector("#productQuantity").value;
        const productPhoto = document.querySelector('#productPhoto')
        const productCategory = document.querySelector('#productCategory').value

        const quantityValue = parseInt(productQuantity); 
        const file = productPhoto.files[0]

        try {
            await createProduct(productName, productDescription, quantityValue, productCategory, file);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            alert('Erro ao criar produto. Verifique o console para mais detalhes.');
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    loadProductPage()
});