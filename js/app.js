'use strict';
var APP = {};
var music = []; // globally declared music holds file upload or uses test files - probably should be JS constant

APP.reset = function () {
  var clone = Object.assign([], music);
  APP.state = {
    music: music,
    completeQue: [],
    nextQue: clone,
    currentTrack: {},
    volume: .5,
    playing: true,
    shuffle: false,
    loopCurrent: false,
    loopAll: false
  };

 APP.state.currentTrack =  APP.state.nextQue.shift();
};

APP.launch = function () {
  APP.state = {};

  APP.reset();

  APP.view = hiosView();
  APP.view.buildHTML();
  APP.view.defineSelectors();
  APP.view.updateTrackList({music: APP.state.music, track: APP.state.currentTrack});

  APP.player = hiosPlayer();
  APP.player.init(APP.state.currentTrack.source);
  APP.attachListeners();
  APP.player.play(true);
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
