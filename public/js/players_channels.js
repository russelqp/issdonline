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

        var players = jsonObj['channels_player'];
        //-<a href='${players[i].redes_player}' title='${players[i].nick_player}' class='${a_icon(players[i].redes_player)}'>${players[i].nick_player}
        function a_icon(redes){
            var li_player = document.querySelector('.li_player');
            var clase_icon = document.createElement('div')
            clase_icon.setAttribute()
           
            for(var e = 0; e<redes.length; e++){
                if (redes[e].includes('facebook')){
                   facebook_icon;
                }
                if (redes[e].includes('youtube')){
                    youtube_icon
                }
                if (redes[e].includes('twitch')){
                    twitch_icon
                }
            }
        }
        for(var i = 0; i < players.length; i++){
            container_li += `<li><div class="__container--info"><h2> Hola, yo soy <span>${players[i].nick_player[0]}</span></h2><h3>${players[i].presentacion_player}</h3><p>${players[i].bio_player}</p><div class="__iconos></div></div><div class="__container--img"><figure><img src='${players[i].img_player}' width="100" height="130" alt='avatar_jugador_issd${players[i].nick_player}'/></figure></div></li>`;
        }
        ul_channels.innerHTML = container_li;
        console.log(ul_channels)
        //ul_channels.innerHTML= container_li.outerHTML;

    }