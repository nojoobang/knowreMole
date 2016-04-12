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
	this.members = [
		{
			name: '조승연',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연2',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연3',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연4',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연5',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연6',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연7',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연8',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연9',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연10',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연11',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연12',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연13',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연14',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '조승연15',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		},
		{
			name: '너로 정했다',
			keyword: ['서울과학고', '서울대', '전자공학과', '수학과', 'CTO', '93->63', 'LG', '유광잠바', '약물복용', '애자일'],
			desc: 'test'
		}
	];

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
};

_._startGame = function(members) {
	var that = this,
		members = this.members,
		len = members.length;

	setInterval(function() {
		that.moles[Math.floor(Math.random() * that.moles.length)].domObj.trigger('show');
	}, 2000);
};

var Combo = function() {
	this.domObj = $('.comboField');

	this.combo = 0;

	this._initialize();
};

var _ = Combo.prototype;

_._initialize = function() {
	this._bindEvent();
};

_._bindEvent = function() {
	this.domObj.find('.combo').bind('add', function() {
		$(this).html(that.combo + ' COMBO!');
	});	

	this.domObj.find('.keyword').bind('add', function(e, keyword) {
		$(this).text(keyword);
	});	
};

var Mole = function(memberData) {
	this.domObj = null;
	this.keyword = '';
	this.memberData = memberData;

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

	this.domObj.bind('show', function() {
		that._show();
	});
};

_._show = function() {
	this.domObj.find('.pic').addClass('cur');
	this._setTimer();
}

_._setTimer = function() {
	var that = this;

	this._bindEvent();

	setTimeout(function() {
		that.domObj.find('.pic').removeClass('cur');
	}, 1500);

	setTimeout(function() {
		that._unBindEvent();
	}, 2000);
}

_._bindEvent = function() {
	var that = this;

	this.domObj.find('.pic').bind('click', function() {
		that._moleCrash($(this));
	});
};

_._unBindEvent = function() {
	this.domObj.find('.pic').unbind('click');
};

_._moleCrash = function(target) {
	var that = this,
		keyword = this.memberData.keyword[Math.floor(Math.random() * this.memberData.keyword.length)];

	target.css('cursor', "url('../images/Cultures-Thor-HammerSmash-icon.png'), auto");
	setTimeout(function() {
		target.css('cursor', "url('../images/Cultures-Thor-Hammer-icon.png'), auto");
	}, 100);

	$('.comboField').find('combo').trigger('add');
	$('.comboField').find('keyword').trigger('add', [keyword]);
};