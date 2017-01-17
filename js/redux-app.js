'use strict';
var APP = {};

APP.launch = function (music) {
  APP.store = createStore(audioReducer);
  APP.store.dispatch({type: 'LOAD_PLAYER', uploadedMusic: music}); // music from musicupload.js
  APP.store.dispatch({type: 'BUILD HTML'});
  APP.store.dispatch({type: 'UPDATE_TRACKLIST'});
  APP.store.subscribe() // attach all DOM & audio object listeners
  APP.store.dispatch({type: 'PLAY_PAUSE'})
};


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
Array.prototype.hiosShuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};
