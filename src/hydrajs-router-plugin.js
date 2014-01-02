(function () {
  'use strict';
  var plugin = function (Hydra, DomReady) {
    var oRoutes = {},
      fpDefault = function() {},
      Router;
    DomReady.ready( function () {
      var fpCallback = oRoutes[document.body.id];
      if ( typeof fpCallback !== 'undefined' ) {
        fpCallback();
      } else {
        fpDefault();
      }
    } );
    Router = {
      add: function ( sIdRoute, fpCallback ) {
        oRoutes[sIdRoute] = fpCallback;
      },
      setDefault: function ( fpCallback ) {
        fpDefault = fpCallback;
      }
    };
    Hydra.extend( 'router', Router );
  };

  if ( typeof define !== 'undefined' ) {
    define( 'hydrajs-router-plugin', ['hydra', 'DomReady'], plugin);
  }else{
    plugin( Hydra, DomReady );
  }

}());