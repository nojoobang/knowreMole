'use strict';

var Sound = function() {
    this.playMap = {};
    this._initialize();
};

var _ = Sound.prototype;

_._initialize = function() {
    var that = this;

    if (!createjs.Sound.initializeDefaultPlugins()) {return;}
 
    var audioPath = "../sound/";
    var sounds = [
        {soundType:"hit",id:"BatmanPunch", src:"BatmanPunch-SoundBible.com-456755860.mp3"},
        {soundType:"hit",id:"Jab", src:"Jab-SoundBible.com-1806727891.mp3"},
        {soundType:"combo",id:"MetalClang", src:"MetalClang-SoundBible.com-19572601.mp3"},
        {soundType:"hit",id:"RightCross", src:"RightCross-SoundBible.com-1721311663.mp3"},
        {soundType:"hit",id:"SharpPunch", src:"SharpPunch-SoundBible.com-1947392621.mp3"},
        {soundType:"hit",id:"StrongPunch", src:"Strong_Punch-Mike_Koenig-574430706.mp3"},
        {soundType:"combo",id:"TempleBell", src:"TempleBellHuge-SoundBible.com-695883450.mp3"},
        {soundType:"hit",id:"UpperCut", src:"UpperCut-SoundBible.com-1272257235.mp3"},
        {soundType:"miss",id:"Blip_Select", src:"Blip_Select.wav"},
        {soundType:"miss",id:"Blip_Select2", src:"Blip_Select2.wav"},
        {soundType:"mole",id:"Default", src:"Default.wav"},
        {soundType:"mole",id:"Hit_Hurt", src:"Hit_Hurt.wav"},
        {soundType:"mole",id:"Jump", src:"Jump.wav"},
        {soundType:"mole",id:"Laser_Shoot", src:"Laser_Shoot.wav"},
        {soundType:"mole",id:"Laser_Shoot2", src:"Laser_Shoot2.wav"},
        {soundType:"mole",id:"Pickup_Coin", src:"Pickup_Coin.wav"},
        {soundType:"mole",id:"Powerup", src:"Powerup.wav"},
    ];
 
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.addEventListener("fileload", handleLoad);
    sounds.forEach(function(v){
        createjs.Sound.registerSound(audioPath+v.src, v.id);    
    })

    that.randomIds = sounds.map(function(v){
                    return {
                        id : v.id,
                        soundType : v.soundType
                    }
                })
    
    function handleLoad(event) {
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

_.random = function(){
    var that = this,
        id = that.randomIds[Math.floor(Math.random()*100) % that.randomIds.length];
    
    that.play(id);
}

_.playType = function(type){
    var that = this,
        sounds = that.randomIds.filter(function(v){
                    return (v.soundType === type);
                }),
        sound = sounds[Math.floor(Math.random()*100) % sounds.length];
    
    that.play(sound.id);
}












