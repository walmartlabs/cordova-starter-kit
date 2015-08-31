var walmart = require('walmart')('API KEY GOES HERE', {
  protocol: 'http'
});

var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    var trigger = document.getElementById('scanner');
    trigger.addEventListener('click', app.scan);
  },
  scan: function() {
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        walmart.getItemByUPC(result.text).then(function(item) {
          document.getElementById('details').innerHTML = [
            '<h1>' + item.product.productName + '</h1>',
            '<h2>' + item.product.brand + '</h2>',
            '<img src="' + item.product.imageAssets[0].versions.tile + '"/>',
            item.product.longDescription
          ].join('');
        });
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   )
  }
};

app.initialize();