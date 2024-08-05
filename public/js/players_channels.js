    var requestURL = 'js/data_channel_players.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
    var canales_players = request.response;
        carga_channels_json(canales_players);
    }
    function carga_channels_json(jsonObj){
        let ul_channels = document.querySelector('.lista_canales_usuarios')
        let container_li = "";
        let facebook_icon = "facebook-icon";
        let youtube_icon = "youtube-icon";
        let twitch_icon = "twitch-icon";

        //- Clases iconos
        let svg_icon_facebook2 = `<svg class="icon icon-facebook2"><use xlink:href="#icon-facebook2"></use></svg>`;
        let svg_icon_youtube = `<svg class="icon icon-youtube "><use xlink:href="#icon-youtube"></use></svg>`;
        let svg_icon_twitch = `<svg class="icon icon-twitch"><use xlink:href="#icon-twitch"></use></svg>`;
        var players = jsonObj['channels_player'];
        //-<a href='${players[i].redes_player}' title='${players[i].nick_player}' class='${a_icon(players[i].redes_player)}'>${players[i].nick_player}
        function a_icon(redes){
        
            var li_player = document.querySelector('.id-0'+i);
            let __iconos = document.querySelector('.__iconos')
            var clase_icon = document.createElement('div');
            

            for(var e = 0; e<redes.length; e++){
                if (redes[e].includes('facebook')){
                    var a_ico_f = document.createElement('a')
                    a_ico_f.setAttribute('href', redes[e]);
                    a_ico_f.setAttribute('title', "Facebook Channel");
                    a_ico_f.setAttribute('rel', "nofollow");
                    a_ico_f.setAttribute('class', 'icon-facebook shadow-lg p-0');
                    a_ico_f.innerHTML = svg_icon_facebook2;
                    clase_icon.appendChild(a_ico_f);
                }
                if (redes[e].includes('youtube')){
                    var a_ico_y = document.createElement('a')
                    a_ico_y.setAttribute("href", redes[e]);
                    a_ico_y.setAttribute('title', "Youtube Channel");
                    a_ico_y.setAttribute('rel', "nofollow");
                    a_ico_y.setAttribute('class', 'icon-youtube shadow-lg p-0');
                    a_ico_y.innerHTML = svg_icon_youtube;
                    clase_icon.appendChild(a_ico_y);
                   
                }
                if (redes[e].includes('twitch')){
                    var a_ico_t = document.createElement('a')
                    a_ico_t.setAttribute("href", redes[e]);
                    a_ico_t.setAttribute('title', "Twitch Channel");
                    a_ico_t.setAttribute('rel', "nofollow");
                    a_ico_t.setAttribute('class', 'icon-twitch shadow-lg p-0');
                    a_ico_t.innerHTML = svg_icon_twitch;
                    clase_icon.appendChild(a_ico_t);
                   
                }
                //console.log("se encontraron "+redes.length+" redes")
                
            }
            return clase_icon.outerHTML;
        }
        function banderas(banderas){
        
            var pais_img = document.createElement('img');
            switch (banderas) {
                case "México":
                    pais_img.setAttribute('src', 'images/flags/flag_mexico.png');
                    pais_img.setAttribute('alt', 'flag_mexico.png');
                    return pais_img.outerHTML;
                    break;
                case "Brasil":
                    pais_img.setAttribute('src', 'images/flags/flag_brasil.png');
                    pais_img.setAttribute('alt', 'flag_brasil.png');
                    return pais_img.outerHTML;
                    break;
                case "Costa Rica":
                    pais_img.setAttribute('src', 'images/flags/flag_costa_rica.png');
                    pais_img.setAttribute('alt', 'flag_costa_rica.png');
                    return pais_img.outerHTML;
                  break;
                case "Colombia":
                    pais_img.setAttribute('src', 'images/flags/flag_colombia.png');
                    pais_img.setAttribute('alt', 'flag_colombia.png');
                    return pais_img.outerHTML;
                    break;
                case "Peru":
                    pais_img.setAttribute('src', 'images/flags/flag_peru.png');
                    pais_img.setAttribute('alt', 'flag_peru.png');
                    return pais_img.outerHTML;
                    break;
                case "Chile":
                    pais_img.setAttribute('src', 'images/flags/flag_chile.png');
                    pais_img.setAttribute('alt', 'flag_chile.png');
                    return pais_img.outerHTML;
                    break;
                case "Argentina":
                    pais_img.setAttribute('src', 'images/flags/flag_argentina.png');
                    pais_img.setAttribute('alt', 'flag_argentina.png');
                    return pais_img.outerHTML;
                    break;
                case "Alemania":
                    pais_img.setAttribute('src', 'images/flags/flag_alemania.png');
                    pais_img.setAttribute('alt', 'flag_alemania.png');
                    return pais_img.outerHTML;
                    break;
                case "Paraguay":
                    pais_img.setAttribute('src', 'images/flags/flag_paraguay.png');
                    pais_img.setAttribute('alt', 'flag_paraguay.png');
                    return pais_img.outerHTML;
                        break;
                default:
                  console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
              }
            

        }
        for(var i = 0; i < players.length; i++){
            container_li += `<li class=${"id-0"+i}><div class="__container--info"><h2 class="mb-4"> Hola, yo soy <span>${players[i].nick_player[0]}</span><span class="inline-block ml-4 align-middle">${banderas(players[i].pais)}</span></h2><p>${players[i].bio_player}</p><div class="__iconos"><h3 class="my-4">Mis canales: </h3>${a_icon(players[i].redes_player)}</div></div><div class="__container--img"><figure><img src='${players[i].img_player}' width="100" height="130" alt='avatar_jugador_issd${players[i].nick_player}'/></figure></div></li>`;
        }
        ul_channels.innerHTML = container_li;
        //ul_channels.innerHTML= container_li.outerHTML;
    }