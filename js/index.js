$(document).ready(function(){


  var playlist = [{
      title:"Hidden",
      artist:"Miaow",
      mp3:"i1.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "images/1.jpg"
    },{
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"i2.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "images/2.jpg"
    },{
      title:"Bubble",
      m4a: "Miaow-07-Bubble.m4a",
      oga: "Miaow-07-Bubble.ogg",
      poster: "images/3.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});