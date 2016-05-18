var names = 'Mama, Papa, Tofiq';

var newNames = names.split(', ',2);

for(var i=0; i < newNames.length; i++) {
	
	alert('Vam pismo '+ newNames[i]);
}
 /*Sprosi u ucitelya ,pocemu kogda (, ) i ( ,) vixodit ne odno i toje*/;
 
 
 

 
 document.write(new Array(4).join("ля") );
  
  
  function camelize(str) {
  var arr = str.split(' ');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(0);
  }

  return arr.join(' ');
}

document.write( camelize("<br>" + "back ground color") );


/*var str=[" back ground color"];
	
	var a = " ";
	for(i+a=0; i<str.length; i++){
		
		
	}*/
	
	
	
var num = function(a,b){
	var result=1;
	for(var i=0; i<b; i++){
	result=a*b;}
		return result;
	
};
	console.log(num(2,3));
	
	
	/*for(i=0; i<10; i++){
		console.log(i)
	};*/
	
	
	
	


function myFunk(a,b){
		var result = 1;
for (i=0;i<b; i++){

result=result*a;	
}
return result;

};
console.log(myFunk(2,10));



for(var i =0; i<=20; i +=2){
	
	console.log(i);
}	


/* Sprosit u ucitelya*/
var f2 = function() {
 x = "inside f2";
};
var x = "outside";
f2();


console.log(x);

	var land = function(){
		var result=" ";
		
		var tropa = function(dlina) {
			for(var i=0; i < dlina; i++){
			result += "_";}
		};
		
		var gora = function(podyom){
			result +="/";
			for(i=0; i< podyom; i++){
			result +="'"
			}
			result +="\\";
			
		}
		tropa(3);
		gora(3);
		tropa(3);
		return result;
		
	};
	
	console.log(land());
	
	
	var tropa = function(){
		var result = "-";
			var spuck = function(size){
				result +="\\";
				for(i=0; i < size; i++){
					result += "_ "
				}
				result +="/";
				for(i=0;i<size; i++){
					result +=" ''' ";
				}
				result +="\\";
			}
			
		spuck(3);
		
		return result;
		
	};

	document.write("<br>"+tropa());
	
	
var obj = function(name,surname){
	this.nam=name,
	this.surn=surname,
	this.myFulName=function(){
		document.write(this.nam+ " " +this.surn);
	}
}
	
	var kenul = new obj("Kenul","Amirmetova");
	document.write(kenul.myFulName());


	var obj2 = function(name,surname){
	this.nam=name,
	this.surn=surname,
	this.myFulName=(function(){
		document.write(this.nam+ " " +this.surn);
	}) ();
}
	
	
	
	
	
	