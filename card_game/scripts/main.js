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
del.splice(del.indexOf(brand), 1);
let drand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var d=Math.floor(Math.random()*(drand+4-drand))+drand;


var del = filteredPool;
del.splice(del.indexOf(d), 1);
let erand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var e=Math.floor(Math.random()*(erand+4-erand))+erand;


var del = filteredPool;
del.splice(del.indexOf(erand), 1);
let frand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var f=Math.floor(Math.random()*(frand+4-frand))+frand;


var del = filteredPool;
del.splice(del.indexOf(frand), 1);
let jrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var j=Math.floor(Math.random()*(jrand+4-jrand))+jrand;


var del = filteredPool;
del.splice(del.indexOf(jrand), 1);
let krand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var k=Math.floor(Math.random()*(krand+4-krand))+krand;


var del = filteredPool;
del.splice(del.indexOf(krand), 1);
let lrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var l=Math.floor(Math.random()*(lrand+4-lrand))+lrand;


var del = filteredPool;
del.splice(del.indexOf(lrand), 1);
let mrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var m=Math.floor(Math.random()*(mrand+4-mrand))+mrand;


var del = filteredPool;
del.splice(del.indexOf(mrand), 1);
let nrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var n=Math.floor(Math.random()*(nrand+4-nrand))+nrand;


var del = filteredPool;
del.splice(del.indexOf(nrand), 1);
let orand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var o=Math.floor(Math.random()*(orand+4-orand))+orand;


var del = filteredPool;
del.splice(del.indexOf(orand), 1);
let prand = filteredPool[Math.floor(Math.random() * filteredPool.length)]; //рандом в двух значениях пула.
var p=Math.floor(Math.random()*(prand+4-prand))+prand;


var del = filteredPool;
del.splice(del.indexOf(prand), 1);
let qrand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
var q=Math.floor(Math.random()*(qrand+4-qrand))+qrand;







image = new Array();
image[0] = "images/2_1.png"; image[1] = "images/2_2.png"; image[2] = "images/2_3.png"; image[3] = "images/2_4.png"; image[4] = "images/3_1.png";image[5] = "images/3_2.png";image[6] = "images/3_3.png";image[7] = "images/3_4.png";image[8] = "images/4_1.png";image[9] = "images/4_2.png";image[10] = "images/4_3.png";image[11] = "images/4_4.png";image[12] = "images/5_1.png";image[13] = "images/5_2.png";image[14] = "images/5_3.png";image[15] = "images/5_4.png";image[16] = "images/6_1.png";image[17] = "images/6_2.png";image[18] = "images/6_3.png";image[19] = "images/6_4.png";image[20] = "images/7_1.png";image[21] = "images/7_2.png";image[22] = "images/7_3.png";image[23] = "images/7_4.png";image[24] = "images/8_1.png";image[25] = "images/8_2.png";image[26] = "images/8_3.png";image[27] = "images/8_4.png";image[28] = "images/9_1.png";image[29] = "images/9_2.png";image[30] = "images/9_3.png";image[31] = "images/9_4.png";image[32] = "images/10_1.png";image[33] = "images/10_2.png";image[34] = "images/10_3.png";image[35] = "images/10_4.png";image[36] = "images/men1.png";image[37] = "images/men2.png";image[38] = "images/men3.png";image[39] = "images/men4.png";image[40] = "images/wife1.png";image[41] = "images/wife2.png";image[42] = "images/wife3.png";image[43] = "images/wife4.png";image[44] = "images/king1.png";image[45] = "images/king2.png";image[46] = "images/king3.png";image[47] = "images/king4.png";image[48] = "images/ace1.png";image[49] = "images/ace2.png";image[50] = "images/ace3.png";image[51] = "images/ace4.png";


/*var win1;
var win2;
var win3;
var win4;*/
 
var num =  [a,c,h,g,b,d,e,f,j,k,l,m,n,o,p,q];
slot1 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot1), 1); //А тут както значение удалил из массива
slot2 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot2), 1);
slot3 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot3), 1);
slot4 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot4), 1);
slot5 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot5), 1);
slot6 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot6), 1);
slot7 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot7), 1);
slot8 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot8), 1);
slot9 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot9), 1);
slot10 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot10), 1);
slot11 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot11), 1);
slot12 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot12), 1);
slot13 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot13), 1);
slot14 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot14), 1);
slot15 = num[Math.floor(Math.random() * num.length)];
var del = num;
del.splice(del.indexOf(slot15), 1);
slot16 = num[Math.floor(Math.random() * num.length)];

var Count = 1;

var aran = function() {
	var mySrc = qq.getAttribute('src');
	if(mySrc === 'images/short.png') {
		qq.setAttribute ('src', image[slot1]);
	} else {
		qq.setAttribute ('src', 'images/short.png');
	}
}

var cran = function() {
	var mySrc = ww.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ww.setAttribute ('src', image[slot2]);
	} else {
		ww.setAttribute ('src', 'images/short.png');
	}
}

var hran = function() {
	var mySrc = ee.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ee.setAttribute ('src', image[slot3]);
	} else {
		ee.setAttribute ('src', 'images/short.png');
	}
}
var gran = function() {
	var mySrc = rr.getAttribute('src');
	if(mySrc === 'images/short.png') {
		rr.setAttribute ('src', image[slot4]);
	} else {
		rr.setAttribute ('src', 'images/short.png');
	}
}
var bran = function() {
	var mySrc = tt.getAttribute('src');
	if(mySrc === 'images/short.png') {
		tt.setAttribute ('src', image[slot5]);
	} else {
		tt.setAttribute ('src', 'images/short.png');
	}
}
var dran = function() {
	var mySrc = yy.getAttribute('src');
	if(mySrc === 'images/short.png') {
		yy.setAttribute ('src', image[slot6]);
	} else {
		yy.setAttribute ('src', 'images/short.png');
	}
}
var eran = function() {
	var mySrc = uu.getAttribute('src');
	if(mySrc === 'images/short.png') {
		uu.setAttribute ('src', image[slot7]);
	} else {
		uu.setAttribute ('src', 'images/short.png');
	}
}
var fran = function() {
	var mySrc = ii.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ii.setAttribute ('src', image[slot8]);
	} else {
		ii.setAttribute ('src', 'images/short.png');
	}
}
var jran = function() {
	var mySrc = oo.getAttribute('src');
	if(mySrc === 'images/short.png') {
		oo.setAttribute ('src', image[slot9]);
	} else {
		oo.setAttribute ('src', 'images/short.png');
	}
}
var kran = function() {
	var mySrc = pp.getAttribute('src');
	if(mySrc === 'images/short.png') {
		pp.setAttribute ('src', image[slot10]);
	} else {
		pp.setAttribute ('src', 'images/short.png');
	}
}
var lran = function() {
	var mySrc = aa.getAttribute('src');
	if(mySrc === 'images/short.png') {
		aa.setAttribute ('src', image[slot11]);
	} else {
		aa.setAttribute ('src', 'images/short.png');
	}
}
var mran = function() {
	var mySrc = ss.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ss.setAttribute ('src', image[slot12]);
	} else {
		ss.setAttribute ('src', 'images/short.png');
	}
}
var nran = function() {
	var mySrc = dd.getAttribute('src');
	if(mySrc === 'images/short.png') {
		dd.setAttribute ('src', image[slot13]);
	} else {
		dd.setAttribute ('src', 'images/short.png');
	}
}
var oran = function() {
	var mySrc = ff.getAttribute('src');
	if(mySrc === 'images/short.png') {
		ff.setAttribute ('src', image[slot14]);
	} else {
		ff.setAttribute ('src', 'images/short.png');
	}
}
var pran = function() {
	var mySrc = gg.getAttribute('src');
	if(mySrc === 'images/short.png') {
		gg.setAttribute ('src', image[slot15]);
	} else {
		gg.setAttribute ('src', 'images/short.png');
	}
}
var qran = function() {
	var mySrc = hh.getAttribute('src');
	if(mySrc === 'images/short.png') {
		hh.setAttribute ('src', image[slot16]);
	} else {
		hh.setAttribute ('src', 'images/short.png');
	}
}


var qq1 = function() {
	aran(setTimeout(() => aran(), 3000));
}
var ww1 = function() {
	cran(setTimeout(() => cran(), 3000));
}
var ee1 = function() {
	hran(setTimeout(() => hran(), 3000));
}
var rr1 = function() {
	gran(setTimeout(() => gran(), 3000));
}
var tt1 = function() {
	bran(setTimeout(() => bran(), 3000));
}
var yy1 = function() {
	dran(setTimeout(() => dran(), 3000));
}
var uu1 = function() {
	eran(setTimeout(() => eran(), 3000));
}
var ii1 = function() {
	fran(setTimeout(() => fran(), 3000));
}
var oo1 = function() {
	jran(setTimeout(() => jran(), 3000));
}
var pp1 = function() {
	kran(setTimeout(() => kran(), 3000));
}
var aa1 = function() {
	lran(setTimeout(() => lran(), 3000));
}
var ss1 = function() {
	mran(setTimeout(() => mran(), 3000));
}
var dd1 = function() {
	nran(setTimeout(() => nran(), 3000));
}
var ff1 = function() {
	oran(setTimeout(() => oran(), 3000));
}
var gg1 = function() {
	pran(setTimeout(() => pran(), 3000));
}
var hh1 = function() {
	qran(setTimeout(() => qran(), 3000));
}

function list1() {
	aran();
	Count++;
	if (slot1 === a || slot1 === c || slot1 === g || slot1 === h) {
		
	}else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 4) {
		alert('Gamover')
	location.reload()}
}
function list2() {
	cran();
	Count++;
	if (slot2 === a || slot2 === c || slot2 === g || slot2 === h) {	
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover');
		location.reload();
		}
}
function list3() {
	hran();
	Count++;
	if (slot3 === a || slot3 === c || slot3 === g || slot3 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover');
		location.reload();
		}
}
function list4() {
	gran();
	Count++;
	if (slot4 === a || slot4 === c || slot4 === g || slot4 === h) {
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover');
	location.reload()};
}
function list5() {
	bran();
	Count++;
	if (slot5 === a || slot5 === c || slot5 === g || slot5 === h) {
	}else { alert('Лошара! Не угадал!)')
	location.reload()}; 
	if (Count > 5) {
		alert('Gamover');
		location.reload()};
}
function list6() {
	dran();
	Count++;
	if (slot6 === a || slot6 === c || slot6 === g || slot6 === h) {
	} else { alert('Лошара! Не угадал!)')
	location.reload()}; 
	if (Count > 5) {
		alert('Gamover');
		location.reload();
		}
}
function list7() {
	eran();
	Count++;
	if (slot7 === a || slot7 === c || slot7 === g || slot7 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list8() {
	fran();
	Count++;
	if (slot8 === a || slot8 === c || slot8 === g || slot8 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list9() {
	jran();
	Count++;
	if (slot9 === a || slot9 === c || slot9 === g || slot9 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list10() {
	kran();
	Count++;
	if (slot10 === a || slot10 === c || slot10 === g || slot10 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list11() {
	lran();
	Count++;
	if (slot11 === a || slot11 === c || slot11 === g || slot11 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list12() {
	mran();
	Count++;
	if (slot12 === a || slot12 === c || slot12 === g || slot12 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list13() {
	nran();
	Count++;
	if (slot13 === a || slot13 === c || slot13 === g || slot13 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}
function list14() {
	oran();
	Count++;
	if (slot14 === a || slot14 === c || slot14 === g || slot14 === h) {
		
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}		
function list15() {
	pran();
	Count++;
	if (slot15 === a || slot15 === c || slot15 === g || slot15 === h) {
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
	location.reload()}
}

function list16() {
	qran();
	Count++;
	if (slot16 === a || slot16 === c || slot16 === g || slot16 === h) {
	} else { alert('Лошара! Не угадал!)')
	location.reload()};
	if (Count > 5) {
		alert('Gamover')
		location.reload()
	}
}

var start = document.querySelector('input');
start.onclick = function() {
    ww1();qq1();ee1();rr1();tt1();yy1();uu1();ii1();oo1();pp1();aa1();ss1();dd1();ff1();gg1();hh1();
	start.disabled = true;
	qq.addEventListener('click', list1);
	ww.addEventListener('click', list2);
	ee.addEventListener('click', list3);
	rr.addEventListener('click', list4);
	tt.addEventListener('click', list5);
	yy.addEventListener('click', list6);
	uu.addEventListener('click', list7);
	ii.addEventListener('click', list8);
	oo.addEventListener('click', list9);
	pp.addEventListener('click', list10);
	aa.addEventListener('click', list11);
	ss.addEventListener('click', list12);
	dd.addEventListener('click', list13);
	ff.addEventListener('click', list14);
	gg.addEventListener('click', list15);
	hh.addEventListener('click', list16);

}
		document.getElementsByClassName("ono").textContent = "Сюда читай"; //Че тут за херня почему не видно текст??? Надо поспать.

document.getElementById("block").textContent = "Жми старт и успей увидеть 4 карты с одинаковым значением. Открой их.";
