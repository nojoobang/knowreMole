'use strict';
var _sound = null;

var Sound = function() {
    this.playMap = {};

    if(!_sound){
        _sound = _._initialize();
        console.log('_sound singleton !');
        
    } else {
        console.log('_sound singleton exist!!');
    }
};

var _ = Sound.prototype;

_._initialize = function() {
    var that = this;

    if (!createjs.Sound.initializeDefaultPlugins()) {return;}
 
    var audioPath = "../sound/";
    var sounds = [
        {id:"BatmanPunch", src:"BatmanPunch-SoundBible.com-456755860.mp3"},
        {id:"Jab", src:"Jab-SoundBible.com-1806727891.mp3"},
        {id:"MetalClang", src:"MetalClang-SoundBible.com-19572601.mp3"},
        {id:"RightCross", src:"RightCross-SoundBible.com-1721311663.mp3"},
        {id:"SharpPunch", src:"SharpPunch-SoundBible.com-1947392621.mp3"},
        {id:"StrongPunch", src:"Strong_Punch-Mike_Koenig-574430706.mp3"},
        {id:"TempleBell", src:"TempleBellHuge-SoundBible.com-695883450.mp3"},
        {id:"UpperCut", src:"UpperCut-SoundBible.com-1272257235.mp3"},
    ];
 
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.addEventListener("fileload", handleLoad);
    sounds.forEach(function(v){
        createjs.Sound.registerSound(audioPath+v.src, v.id);    
    })
    
    function handleLoad(event) {
        console.log(event);
        that.playMap[event.id] = true;
    }

    console.log('_initialize')
    return this;
};

_.play = function(id){
    console.log('play '+id);
    if(this.playMap[id])   createjs.Sound.play(id);
    else console.log(id + ' is not loaded!!');
}





