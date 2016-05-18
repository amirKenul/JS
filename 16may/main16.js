

function efgan(){
	
	array ="elovset";//var yazsaq gormur;yalniz lokal variable kimi gorur.
	
	document.write(array);
	
}

function elovset(){
	
	return efgan();
	
	
}
elovset();

document.write(array);

/*
function heciBala(a){
	a=b;
	return b;  //retun nen sonra her shey bitir, posle nego on nicego ne citayet.
	document.write(b);
}

heciBala("Heci");*/


	var a = "hecinin oglu";
	
function heciBala(a){
	
		var b=a;
		document.write("<br>"+b);
		var a="hecinin o biri oglu";
		document.write("<br>"+a);
}
	var a ="hecinin ogey oglu";
	heciBala("HEcinin yetimleri");


var a = new Date();

var b = a.getTime();

document.write("<br>"+a);

//igrayemsya so vremenem;
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];

var gunler = ["Bazar ertesi","Cershenbe axshami","Cershenbe","Cume axshami","Cume","Senbe","Bazar"]

var gun = a.getDay();

var a = d.getDate();



document.write("<br> "+ "Bu Gun"+ " " +gunler[gun-1]+" " +n+" "+a );

function myAge(date) {

  return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;

}

 

document.write("<br>"+myAge('1986-09-18'));


var birth = new Date(1990, 3 - 1, 16); //дата рождения

var year = birth.getFullYear();

var today = new Date();

document.write(today.getFullYear() - year - (today.getTime() < birth.setFullYear(year)) );


/*
var a = new Date(1990, 3 , 13,14,17,00);
t = dogumTarixi.getTime();
var b=new Date();
z = 

document.write();
*/	

var m = prompt('insert minute');

	
function ourTime(){

	var time = new Date();

	var oms = time.toLocaleTimeString();
	
	document.open();
	document.write(oms);
	document.close();

	if (oms=='9:'+m+':00'){
		alert("Begi");
	}
}

		setInterval(ourTime,1000);
		
		







