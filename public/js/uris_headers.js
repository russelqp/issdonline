window.addEventListener('DOMContentLoaded', la_url);

function la_url(){
    let protocolo = window.location.protocol;
    let barras = "//";
    let mi_host = window.location.host;
    let mi_path = window.location.pathname;
    let laraiz = "/issdonline/public/";
    let mi_url_local = protocolo+barras+mi_host+laraiz;
    let mi_url_online = protocolo+barras+mi_host;
    //let mi_url = mi_url_local;
    let imgs = document.querySelectorAll('img');
    let as = document.querySelectorAll('a');
    let sc = document.querySelectorAll('script');
    let src = document.querySelectorAll('source');
    let li = document.querySelectorAll('link');
    let src2 = document.querySelectorAll('src');
    
    //console.log(mi_url_local)
    if(mi_path.includes("como-jugar-issd-online") || mi_path.includes("reglamento")|| mi_path.includes("enlaces")|| mi_path.includes("faq")|| mi_path.includes("issdnews")|| mi_path.includes("links")|| mi_path.includes("rankings")|| mi_path.includes("reglamento")|| mi_path.includes("tips")|| mi_path.includes("tutoriales")|| mi_path.includes("tips/tipos-de-goles")){
        mi_url = mi_url_local;
        console.log(mi_url)
    }
    if(mi_path.includes("issdonline")){
        mi_url = mi_url_local;
       
    }else if(mi_host.includes(5500)){
        mi_url = protocolo+barras+mi_host+"/public";
        
    }else{
        mi_url = mi_url_online;
    }
        
   

    for(i=0; i<imgs.length;i++){
        var src_viejo = imgs[i].getAttribute("src");
        if(!src_viejo.includes("http://") || !src_viejo.includes("https://")){
            imgs[i].setAttribute('src', mi_url+'/'+src_viejo)
        }
    }

    for(e=0; e<as.length;e++){
        var a_viejo = as[e].getAttribute("href");
        if(a_viejo.includes("http://") || a_viejo.includes("https://")){
            as[e].setAttribute('href', a_viejo)
            //console.log(a_viejo)
        }else{
            as[e].setAttribute('href', mi_url+'/'+a_viejo)
            //console.log(a_viejo)
        }
    }

    for(s=0; s<sc.length;s++){
        if(sc[s].getAttribute("src") === true){
            var s_viejo = sc[s].getAttribute("src");
            if(s_viejo.includes("http://") || s_viejo.includes("https://")){
                sc[s].setAttribute('src', s_viejo)
                console.log("hola" + s_viejo)
            }else{
                sc[s].setAttribute('src', mi_url+'/'+s_viejo)
                console.log("hola" + s_viejo)
            }
        }  
    }


    for(sv=0; sv<src.length;sv++){
        var ss_viejo =src[sv].getAttribute("srcset");
        if(ss_viejo.includes("http://") || ss_viejo.includes("https://")){
            src[sv].setAttribute('srcset', ss_viejo)
        }else{
            src[sv].setAttribute('srcset', mi_url+'/'+ss_viejo)
           // console.log(s_viejo)
        }
    }

    for(l=0; l<li.length;l++){
        var l_viejo =li[l].getAttribute("href");
        if(l_viejo.includes("http://") || l_viejo.includes("https://")){
            li[l].setAttribute('href', l_viejo)
            
        }else{
            li[l].setAttribute('href', mi_url+'/'+l_viejo)
           
        }
    }

}

//Global site tag (gtag.js) - Google Analytics -->


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-146771936-1');
