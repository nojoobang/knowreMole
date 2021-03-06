'use strict';

var MoleGame = function() {
	this.comboSystem = null;
	this.moles = [];

	this._initialize();
	
};

var _ = MoleGame.prototype;

_._initialize = function() {
	this.comboSystem = new Combo();
	
	this._loadMember();
};

_._loadMember = function() {
	this.members = jsonData;

	this._createMole();
};

_._createMole = function() {
	var members = this.members,
		len = members.length,
		i;

	for(i = 0; i < len; i++) {
		this.moles.push(new Mole(members[i]));
	}

	this._startGame(members);
	this._bindEvent();
};

_._startGame = function(members) {
	var that = this,
		members = this.members,
		len = members.length;

	var intervalRandomArray = [1000,1500,2000,2500,3000];
	function intervalRandom(){
		setTimeout(function(){
			var moleIndex = Math.floor(Math.random() * that.moles.length);
			if(Math.random() > 0.8){
				that.moles[moleIndex].domObj.trigger('show');

				var moleIndex2 = Math.floor(Math.random() * that.moles.length);
				if(moleIndex2 === moleIndex) {
					if( moleIndex === 0)
						moleIndex2 = that.moles.length -1;
					else if( moleIndex === that.moles.length -1)
						moleIndex2 = 0;
				}

				that.moles[moleIndex2].domObj.trigger('show');
			} else {
				that.moles[moleIndex].domObj.trigger('show');
			}
			
			intervalRandom();
		},intervalRandomArray[Math.floor(Math.random()*10)%5])
	}

	intervalRandom();

};

_._bindEvent = function() {
	var that = this;

	$('.moleField').bind('explosion', function(e, offsetX, offsetY) {
		$(this).find('.explosion').show().css({
			top: offsetY - 40,
			left: offsetX - 40
		});
		setTimeout(function() {
			$('.explosion').hide();
		}, 100);
	});
};	

var Combo = function() {
	this.domObj = $('.comboField');

	this.combo = 0;
	this.sound = new Sound();

	this._initialize();
};

var _ = Combo.prototype;

_._initialize = function() {
	this._bindEvent();
};

_._bindEvent = function() {
	var that = this;

	this.domObj.find('.combo').bind('add', function(e, resetFlag) {
		if(resetFlag) {
			that.combo = 0;
			that.sound.playType('miss');
		} else {
			that.combo++;
			if(that.combo % 5 === 0) that.sound.playType('combo');
		}
		$(this).html(that.combo + ' COMBO!');
	});	

	this.domObj.find('.keyword').bind('add', function(e, keyword) {
		$(this).text(keyword);
	});	
};

var Mole = function(memberData) {
	this.domObj = null;
	this.memberData = memberData;
	this.sound = new Sound();
	this.domTimer = null;
	this.eventTimer = null;
	this.isClicked = false;

	this._initialize();
};

var _ = Mole.prototype;

_._initialize = function() {
	this._arrange();
};

_._arrange = function() {
	var that = this;

	this.domObj = $('<div class="mole"><div class="pic"><span class="name">' + this.memberData.name + '</span></div></div>'),

	$('.moleField').append(this.domObj);

	this._bindShowEvnet();
};

_._bindShowEvnet = function() {
	var that = this;

	this.domObj.bind('show', function() {
		that._show();
	});

	this.domObj.bind('click', function(e) {
		e.stopPropagation();

		$('.comboField').find('.combo').trigger('add', [true]);
		//that.sound.playType('combo');		
	});
};

_._show = function() {
	this.domObj.find('.pic').addClass('cur');
	this._setTimer();
	this.sound.playType('mole');
};

_._hide = function() {
	clearTimeout(this.domTimer);
	clearTimeout(this.eventTimer);

	if(!this.isClicked) {
		$('.comboField').find('.combo').trigger('add', [true]);
	}

	this.domObj.find('.pic').removeClass('cur');
	this._unBindEvent();
}

_._setTimer = function() {
	var that = this;

	this._bindEvent();

	this.domTimer = setTimeout(function() {
		that.domObj.find('.pic').removeClass('cur');
	}, 1800);

	this.eventTimer = setTimeout(function() {
		$('.comboField').find('.combo').trigger('add', [true]);
		$('.comboField').find('.keyword').trigger('add', [" "]);
		that._unBindEvent();
	}, 1900);
};

_._bindEvent = function() {
	var that = this;

	this.domObj.find('.pic').bind('click', function(e) {
		e.stopPropagation();
		console.log(e);
		that._explosion(e);
		that._moleCrash($(this));
		that._hide();
	});
};

_._unBindEvent = function() {
	this.domObj.find('.pic').unbind('click');
};

_._explosion = function(e) {
	$('.moleField').trigger('explosion', [Math.floor(e.clientX - $('.moleField').offset().left), Math.floor(e.clientY - $('.moleField').offset().top)]);
};

_._moleCrash = function(target) {
	var that = this,
		keyword = this.memberData.keyword[Math.floor(Math.random() * this.memberData.keyword.length)];

	target.css('cursor', "url('../images/Cultures-Thor-HammerSmash-icon.png'), auto");
	setTimeout(function() {
		target.css('cursor', "url('../images/Cultures-Thor-Hammer-icon.png'), auto");
	}, 100);

	$('.comboField').find('.combo').trigger('add', [false]);
	$('.comboField').find('.keyword').trigger('add', [keyword]);

	this.isClicked = true;
	this.sound.playType('hit');
};