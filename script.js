const arrayProduto = [
    {
        nome: 'Notebook',
        descricao: "Processador Ryzen 7, 16Gb 512SSD",
        preco: 1000
    },
    
]

arrayProduto.forEach(function(post){
    const novoProjeto = document.createElement('ol');
    console.log(novoProjeto)

    const projeto = document.createElement('h1');


projeto.id = 'titulo'
novoProjeto.innerHTML = `<li>${post.nome}</li><li>${post.descricao}</li><li>${post.preco}</li  `

const elementoBody = document.querySelector('body');
console.log(projeto);


})



