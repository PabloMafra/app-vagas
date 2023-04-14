const fechar = document.getElementById('pop-up')

const reservar = document.getElementById('agendar')

const background = document.getElementById('bg')

function fecharPop(){
    fechar.style.display = "none";
    background.style.display = "none";
    location.reload();
}

function reservarVaga(){
    fechar.style.display = "flex";
    background.style.display = "flex";
}