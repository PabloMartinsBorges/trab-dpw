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

