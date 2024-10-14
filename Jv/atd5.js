document.addEventListener('DOMContentLoaded', () => {
    // Create and append the title
    const title = document.createElement('h1');
    title.id = 'titulo';
    title.textContent = 'Bem-vindo à nossa Loja!';
    document.body.appendChild(title);

    // Create and append the product container
    const productContainer = document.createElement('div');
    productContainer.id = 'produto';

    // Create and append the product name
    const productName = document.createElement('h2');
    productName.textContent = 'Produto Exemplo';
    productContainer.appendChild(productName);

    // Create and append the product description
    const productDescription = document.createElement('p');
    productDescription.textContent = 'Esta é a descrição do produto exemplo. É um produto de alta qualidade.';
    productContainer.appendChild(productDescription);

    // Create and append the product price
    const productPrice = document.createElement('p');
    productPrice.textContent = 'Preço: R$ 99,99';
    productContainer.appendChild(productPrice);

    // Optionally, create and append a product image
    const productImage = document.createElement('img');
    productImage.src = 'https://via.placeholder.com/150';
    productImage.alt = 'Imagem do Produto Exemplo';
    productContainer.appendChild(productImage);

    // Append the product container to the body
    document.body.appendChild(productContainer);
});