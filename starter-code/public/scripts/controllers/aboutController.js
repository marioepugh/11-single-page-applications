'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    $('#articles').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(app);
