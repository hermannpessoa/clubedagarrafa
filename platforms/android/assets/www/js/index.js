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
        getShortcut();

        if( PushbotsPlugin.isAndroid() ){
            PushbotsPlugin.initializeAndroid("55bbebc81779595f408b4567", "1037061018259");
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
    
    window.plugins.toast.showLongBottom(ms, function(a) {
        console.log('toast success: ' + a)
    }, function(b) {
        alert('toast error: ' + b)
    })
}

function getShortcut(){
    if (!localStorage.getItem('shortcut')) {
        window.plugins.Shortcut.CreateShortcut("Text to show", successfunc, failfunc);
        localStorage.setItem('shortcut', true);
    }
}
