target = document.querySelectorAll("[data-anime]")
window.addEventListener("load",()=>{
    target.forEach((e)=>{
        e.classList.add("anime")
})

})
const menu = document.getElementById('menu');
const nav = document.getElementById('navbar');
const li = document.querySelectorAll("li")
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
const body = document.querySelector("body")

//adiciona um oucinte de evento para o clique do menu hamburguer
menu.addEventListener("click", () => {
    //verifica se a navbar possui a classe hide
    if (nav.classList.contains("hide")) {
        //mostra a navbar(menu)
        nav.classList.add("show")
        nav.classList.remove("hide")
        main.style.filter="blur(2px)"
        footer.style.filter="blur(2px)"
        body.classList.add("no-scroll")

    }
})

// Adiciona um ouvinte de evento para o clique no documento
document.addEventListener('click', function (event) {
    const isClickInsideMenu = nav.contains(event.target) || menu.contains(event.target);

    // Verifica se o clique ocorreu dentro do menu ou no ícone do menu hamburguer
    if (!isClickInsideMenu && nav.classList.contains("show")) {
        // Esconde o menu
        nav.classList.remove("show")
        nav.classList.add("hide")
        main.style.filter=""
        footer.style.filter=""
        body.classList.remove("no-scroll")
    }
})
function active() {
    
    if (nav.classList.contains("show")) {
        //esconde a navbar
        nav.classList.remove("show")
        nav.classList.add("hide")
        main.style.filter=""
        footer.style.filter=""
        body.classList.remove("no-scroll")
        
    }

}
//verifica cada item da navbar
li.forEach((item) => {
    //adiciona um ouvinte de evento para o clique de cada item da navbar
    item.addEventListener("click", active)
})




function redirectWithDelay(event) {
    event.preventDefault(); // Impede o redirecionamento padrão do href
    var delay = 500;
    
    // Adiciona um atraso antes de redirecionar para a nova página
    setTimeout(function() {
      window.location.href = event.target.href;
    }, delay);
  }