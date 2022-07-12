const texto = document.querySelector('h1');

document.addEventListener('keydown',function(key){
    texto.textContent = `Letra '${key.key}' esta siendo presionada`
});

document.addEventListener('keyup',function(key){
    texto.textContent = `Letra '${key.key}' dejo de estar siendo presionada`
})