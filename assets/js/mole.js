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
	var members = [
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
		}
	];

	this._createMole(members);
};

_._createMole = function(members) {
	var members = members,
		len = members.length,
		i;

	for(i = 0; i < len; i++) {
		// this.moles.push(new Mole(members[i]));
	}
};

var Combo = function() {
	this.domObj = $('#comboField');

	this.combo = 0;

	this._initialize();
};

var _ = Combo.prototype;

_._initialize = function() {
	console.log('Combo!!');
};

var Mole = function(memberData) {
	this.memberData = memberData;

	// this._initialize();
};

var _ = Mole.prototype;

_._initialize = function() {
	this._arrange();
};

_._arrange = function() {
	console.log("Yeah");
}