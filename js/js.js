function contadorDias(){
    var h3 = document.getElementById("data");
    
    var data_atual = new Date();
    
    var ano = data_atual.getFullYear();
    if(data_atual.getMonth() != 11 || (data_atual.getMonth() == 11 && data_atual.getDate() < 7))
        ano--;

    var data_evento = new Date(ano, 11, 9);
    
    var d1 = data_atual.getDate() + '/' +  data_atual.getMonth() + '/' + data_atual.getFullYear();
    var d2 = data_evento.getDate() + '/' +  data_evento.getMonth() + '/' + data_evento.getFullYear();
    
    var diff = moment(d1,"DD/MM/YYYY HH:mm:ss").diff(moment(d2,"DD/MM/YYYY HH:mm:ss"));
    var dias = moment.duration(diff).asDays();
    
    h3.textContent +=  dias.toString();
}   



function showSlides(n) {
  let i;
  let slideIndex = 1;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "100");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function escreve_dia(){
    data = new Date();
    dia = data.getDate();
    dia_mes = dia.toString();
    document.getElementById(dia_mes).style.color = "red";
    document.getElementById(dia_mes).style.fontWeight = "bold";
    document.getElementById(dia_mes).style.fontSize = "larger";
    
}

function escreve_mes(){
 nome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
 hoje = new Date();
 mes = hoje.getMonth();
 document.write(nome[mes]);
 }


 // Código do Jogo

 var maximo  = 10;
var largura = 120;
var altura  = 200;
var margem  = 20;
var viradas = 0;
var ctx;
var ordem   = []; // ordem em que as cartas aparecem
var imagens = [
    "../imagem/guarana3.png", "../imagem/guarana3b.png",
    "../imagem/guarana5.png", "../imagem/guarana5b.png",
    "../imagem/guarana7.png", "../imagem/guarana7b.png",
    "../imagem/guarana-evento.png", "../imagem/guarana-eventob.png",
    "../imagem/logo1.png", "../imagem/logo1b.png",
    "../imagem/guarana6.png", "../imagem/guarana6b.png"
]

function embaralhaCartas(){
    // Vertor ordenado de valores
    var i, verso = [];
    for (i = 0; i < maximo; i++) {
        ordem[i]  = i;
    }
    // Embaralha as cartas
    var n, tmp;
    for (i = ordem.length; i;) {
        n = Math.random() * i-- | 0;
        tmp = ordem[n];
        ordem[n] = ordem[i];
        ordem[i] = tmp;
    }
}

function viraCarta(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    nx = Math.floor(x / (largura + margem));
    x_inf = (nx + 1) * margem + nx * largura;
    x_sup = x_inf + largura;

    // Verifica se o clique está na segunda linha
    if (y > altura + margem){
        nx += 5;
        y_inf = altura + margem;
        y_sup = y_inf + altura;
    }
    else {
        y_inf = 0;
        y_sup = altura;
    }

    if ((x >= x_inf && x <= x_sup) && 
         (y >= y_inf && y <= y_sup)){
        var ctx = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = imagens[ordem[nx]];
        img.onload = function (){
            ctx.drawImage(img, x_inf, y_inf, largura, altura);
        }
    }
}

function criaImagem(i, x, y){
    var ctx = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = "../imagem/guarana2.png";
        img.onload = function (){
            ctx.drawImage(img, x, y, largura, altura);
        }
    }
}

function montaPainel(){
    var x = margem;
    var y = 0;
    for (var i = 0; i < maximo; i++){
        criaImagem(i, x, y);
        x += largura + margem;
        if (i > (maximo / 2) - 2 && y == 0){
            x = margem;
            y += altura + margem;
        }
    }
}

function init(){
    // O metodo HTMLCanvasElement.getContext() retorna um contexto de desenho no canvas,
    // ou null se o contexto identificado não é suportado
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "blue";
    ElementoCanvas = document.getElementById('canvas');
    ElementoCanvas.addEventListener('mousedown', function(e){
            viraCarta(ElementoCanvas, e);
        });      
    embaralhaCartas();
    montaPainel();   
}


function Data_Comemorativa() {
   var hoje = new Date();
   if(hoje.getDate() ==7 && hoje.getMonth() == 8){
    document.getElementById('div-principal').style.backgroundImage = 'url("../imagem/bandeira-do-brasil.png")';
    document.getElementById('div-principal').style.backgroundSize = '1000px';
    document.getElementById('div-principal').style.backgroundRepeat = 'no-repeat';
   document.getElementById('div-principal').style.backgroundPosition = 'right';
   document.getElementById('div-principal').style.backgroundColor = 'rgb(0, 156, 59)';
   const node = document.createTextNode("Nada melhor pra comemorar o dia da indepedência do que uma fruta brasileira");
   const paragrafo1 = document.createElement("h3");
    paragrafo1.appendChild(node);
    const elemento1 = document.getElementById("subtitulo");
    elemento1.appendChild(paragrafo1);

   }
   

}