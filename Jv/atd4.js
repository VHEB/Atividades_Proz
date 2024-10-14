// Capture os elementos criados
const h1Element = document.querySelector('h1');
const aElement = document.querySelector('a');
const ulElement = document.querySelector('ul');
const olElement = document.querySelector('ol');

// Adicionar conteúdo textual aos elementos 'h1' e 'a'
h1Element.innerText = 'Título Principal';
aElement.innerText = 'Clique aqui';

// Adicionar três itens simples na lista não ordenada
ulElement.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionar três itens com links para outros sites na lista ordenada
olElement.innerHTML = `
    <li><a href="https://www.example.com">Link 1</a></li>
    <li><a href="https://www.example.org">Link 2</a></li>
    <li><a href="https://www.example.net">Link 3</a></li>
`;