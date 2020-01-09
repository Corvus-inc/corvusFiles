let numPool = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, ]
rand = numPool[Math.floor(Math.random() * numPool.length)];

let excludePool = [ rand ];
let filteredPool = []; //тут все крести, кроме rand
for (let i = 0; i < numPool.length; i++) {
    if (excludePool.indexOf(numPool[i]) === -1) { //Тут я нихуя не понял как это работает! в фильтрпул засунул ввсе значения, кроме основного рандома rand
        filteredPool.push(numPool[i]);
    }
}
let brand = filteredPool[Math.floor(Math.random() * filteredPool.length)]; //Радует итог. случайный фильтерпул
var b=Math.floor(Math.random()*(brand+4-brand))+brand; //случайная масть.

var a=Math.floor(Math.random()*(rand+4-rand))+rand;

var c=Math.floor(Math.random()*(rand+4-rand))+rand;
while (c === a) { 
	c = Math.floor(Math.random()*(rand+4-rand))+rand;
	}
	
var h = Math.floor(Math.random()*(rand+4-rand))+rand;
while (h === a || h === c ) { 
	h = Math.floor(Math.random()*(rand+4-rand))+rand;
	} 
	
var g = Math.floor(Math.random()*(rand+4-rand))+rand;
while (g === a || g === c || g === h) { 
	g = Math.floor(Math.random()*(rand+4-rand))+rand;
	}

var del = filteredPool;
del.splice(del.indexOf(), 1);
let drand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var d=Math.floor(Math.random()*(drand+4-drand))+drand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let erand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var e=Math.floor(Math.random()*(erand+4-erand))+erand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let frand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var f=Math.floor(Math.random()*(frand+4-frand))+frand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let jrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var j=Math.floor(Math.random()*(jrand+4-jrand))+jrand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let krand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var k=Math.floor(Math.random()*(krand+4-krand))+krand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let lrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var l=Math.floor(Math.random()*(lrand+4-lrand))+lrand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let mrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var m=Math.floor(Math.random()*(mrand+4-mrand))+mrand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let nrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var n=Math.floor(Math.random()*(nrand+4-nrand))+nrand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let orand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var o=Math.floor(Math.random()*(orand+4-orand))+orand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let prand = filteredPool[Math.floor(Math.random() * filteredPool.length)]; //рандом в двух значениях пула.
var p=Math.floor(Math.random()*(prand+4-prand))+prand;


var del = filteredPool;
del.splice(del.indexOf(), 1);
let qrand = filteredPool.length;
var q=Math.floor(Math.random()*(qrand+4-drand))+qrand;







image = new Array();
image[0] = "images/2_1.png"; image[1] = "images/2_2.png"; image[2] = "images/2_3.png"; image[3] = "images/2_4.png"; image[4] = "images/3_1.png";image[5] = "images/3_2.png";image[6] = "images/3_3.png";image[7] = "images/3_4.png";image[8] = "images/4_1.png";image[9] = "images/4_2.png";image[10] = "images/4_3.png";image[11] = "images/4_4.png";image[12] = "images/5_1.png";image[13] = "images/5_2.png";image[14] = "images/5_3.png";image[15] = "images/5_4.png";image[16] = "images/6_1.png";image[17] = "images/6_2.png";image[18] = "images/6_3.png";image[19] = "images/6_4.png";image[20] = "images/7_1.png";image[21] = "images/7_2.png";image[22] = "images/7_3.png";image[23] = "images/7_4.png";image[24] = "images/8_1.png";image[25] = "images/8_2.png";image[26] = "images/8_3.png";image[27] = "images/8_4.png";image[28] = "images/9_1.png";image[29] = "images/9_2.png";image[30] = "images/9_3.png";image[31] = "images/9_4.png";image[32] = "images/10_1.png";image[33] = "images/10_2.png";image[34] = "images/10_3.png";image[35] = "images/10_4.png";image[36] = "images/men1.png";image[37] = "images/men2.png";image[38] = "images/men3.png";image[39] = "images/men4.png";image[40] = "images/wife1.png";image[41] = "images/wife2.png";image[42] = "images/wife3.png";image[43] = "images/wife4.png";image[44] = "images/king1.png";image[45] = "images/king2.png";image[46] = "images/king3.png";image[47] = "images/king4.png";image[48] = "images/ace1.png";image[49] = "images/ace2.png";image[50] = "images/ace3.png";image[51] = "images/ace4.png";

var qq = document.querySelector('#qq');
var ww = document.querySelector('#ww');
var ee = document.querySelector('#ee');

var num =  [a,b,c];
abc = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(abc), 1); //А тут както значение удалил из массива
abd = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(abd), 1);
var abe = num[Math.floor(Math.random() * num.length)];


var guessCount = 1;

var qran = qq.onclick = function() {
	var mySrc = q.getAttribute('src');
	if(mySrc === 'images/short.png') {
		qq.setAttribute ('src', image[abc]);
	} else {
		qq.setAttribute ('src', 'images/short.png');
	}
}

var wran = ww.onclick = function() {
	var mySrc = ww.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ww.setAttribute ('src', image[abd]);
	} else {
		ww.setAttribute ('src', 'images/short.png');
	}
}

var eran = ee.onclick = function() {
	var mySrc = ee.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ee.setAttribute ('src', image[abe]);
	} else {
		ee.setAttribute ('src', 'images/short.png');
	}
}
var q1 = function() {
	qran(setTimeout(() => qran(), 1000));
}
var w1 = function() {
	wran(setTimeout(() => wran(), 1000));
}
var e1 = function() {
	eran(setTimeout(() => eran(), 1000));
}
var start = document.querySelector('input');
start.onclick = function() {
    w1();q1();e1();
	start.disabled = true;
}
