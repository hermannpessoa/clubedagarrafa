var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        checkConnection();

        if( PushbotsPlugin.isAndroid() ){
            PushbotsPlugin.initializeAndroid("55bbebc81779595f408b4567", "1037061018259");
            //Set Alias
            PushbotsPlugin.setAlias("hermann");
            //Tag Device
            PushbotsPlugin.tag("teste");
            //Enable debug mode
            PushbotsPlugin.debug(true);
            //Get device token
            PushbotsPlugin.getToken(function(token){
                alert(token);
            });
        }
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }
};

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown';
    states[Connection.ETHERNET] = 'Cabo';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'Conectado';
    states[Connection.NONE]     = 'Desconectado';

    ms = 'Status de Conexão: ' + states[networkState];
    toast(ms);
}

function toast(msg, delay){
    // parameters: TEXT, Time(Milisseconds);
    if($('.toast').size() < 1){
        $('body').append('<div class="toast" style="position: absolute;bottom: 20px;width: 100%;text-align: center;display: none;"><div class="container" style="background: rgba(0,0,0,0.3);text-align: center;position: relative;display: table;max-width: 70%;margin: 0 auto;padding: 0px 19px;border-radius: 50px;"><p style="color: #FFF;">-</p></div></div>');
        if(typeof delay ==  "undefined"){ delay = "4000" }; // Default time
        $('.toast p').text(msg)
        $('.toast').fadeIn().delay(delay).fadeOut('slow', function(){$('.toast').remove();});
    }else{
        $('.toast p').text(msg)
        $('.toast').stop(true, true).delay(delay).fadeOut('slow', function(){$('.toast').remove();});
    }
}
