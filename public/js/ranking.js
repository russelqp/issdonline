import {firebaseConfig} from './modules/apprank.js';
document.createElement('h1').innerHTML="Ranking Omni";

//obtener datos
function retrieveInfos(){
    let ref = firebase.database().ref("omniranking");
    ref.on("value", gotData);
}

function gotData(data){
    
    let info = data.val()
    createHTML(info)
}

function createHTML(datos){
    
    let elementos = datos;
    let mainhtml = document.querySelector('#portada')
    console.log(elementos)
    //creamos un nuevo array con los elementos de acuerdo a los filtros
    var main_ranking = "";
    function showHtml(){
        main_ranking+= `<ul class="listado_rank">`;
        main_ranking+= `<li class="li_headers lg:w-full grid grid-cols-4 justify-items-center bg-slate-600">
        <span>Position</span><span>Id</span><span>Name</span><span>Score</span>      
        </li>`;
        elementos.forEach(element => {
            if(element.POS <=10){
                main_ranking+= `<li class="li_item lg:w-full grid grid-cols-4 justify-items-center border-1 border-blue-50 odd:bg-green-300 even:bg-green-400"><span class="font-semibold">${element.POS}</span> <span>${element.ID}</span> <span class="font-semibold">${element.NOME}</span> <span class="font-semibold">${element.SCORE}</span>`;
            } else{
                main_ranking+= `<li class="li_item lg:w-full grid grid-cols-4 justify-items-center odd:bg-gray-200  even:bg-gray-300 border-1 border-blue-50 bg-blue-300"> <span>${element.POS}</span> <span>${element.ID}</span> <span>${element.NOME}</span> <span>${element.SCORE}</span>`;
            }
            
        }); 
        main_ranking+= "</ul>";    
        mainhtml.insertAdjacentHTML('afterend', main_ranking);
    } 
    showHtml()
   
}
retrieveInfos()