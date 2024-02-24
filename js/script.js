var url = "https://api.minetools.eu/ping/play.vonix.network/25565";
// example = "https://api.minetools.eu/ping/youtserver.com/12345"

$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){
   //pl = '<br>Último online: '+r.players.sample[0].name;
   pl = '';
 } 
  $('#rest').html('<i class="fas fa-users"></i> <span class="azul">Players Online:</span> <b><span class="online_players">'+r.players.online+'</span>/<span class="rojo">'+r.players.max+pl + "</span></b>");
 //$('#favicon').attr('src', r.favicon);
    
});
