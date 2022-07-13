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


