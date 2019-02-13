/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-icon-radio-buttons',
  isDevelopingAddon: function(){
    return true;
  },
  included: function(app){
    this._super.included(...arguments);
    app.import("vendor/assets/stylesheets/icon-radio-button.css");
  }
};
