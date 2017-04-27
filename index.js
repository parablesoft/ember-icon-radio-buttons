/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-icon-radio-buttons',
  isDevelopingAddon: function(){
    return true;
  },
  included: function(app){
    app.import("vendor/assets/stylesheets/icon-radio-button.css");
  }
};
