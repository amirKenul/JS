/*  var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
document.write(children); */
           
		   
/*  var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.constructor); */


/*unshift() dobovlyayet noviye elementi v nacalo massiva i vozvrashayut novuyu dlinu*/
/*var fruits=["a","b","c","d"]
	fruits.unshift("Lemon","Pineapple");
	document.write(fruits);
	
	toString() еобразует массив в строку, и возвращает результат*/
	
		//var fruits = [1+2,34];
		
		//document.write(fruits.toString());
		
		
		/*some() Проверяет, является ли какой-либо из элементов в массиве sootvetstvuyushey usloviyam*/
		
		/*var ages = [3,4,5];
		
		function checkAdult(age){s
			return ages >=0
		}
		document.write(ages.some(checkAdult));*/
		
		
		/*reduceRight() Уменьшение значения массива в одно значение (идущий справа налево)*/
		
		/*var names=["Mike","Like","David"]
		document.write(names.redu*/
		
var nums= [0.35, 5.65, 7.6];

var numOk = nums.map(function(num) {
  return Math.round(num);
});

//document.write(numOk);
/*
function myFunction() {
    document.write(numbers.map(Math.round));
}*/
var i = 1;
var r = 2;
var c = 1;

while (i<10){
	r = c*2;
	
	c = r;
	
	i++;
	document.write("<br/>"+r);

}




/*var a = Number(prompt('Enter the number',' '));
var b =  Numbr(prompt ('Enter the anothernumber',' ' ) );

	var result =1;
	for (var i =1; i<=b; i++){
		result = result*a;
	}
 consol.log(b); */
 
 
 var a=5;
 var b=3;
 


a=a+b;
b=a-b;
a=a-b;

 

 
 console.log("a: "+a);
 console.log("a: "+b)
 
 
 
 
 
 
 



		
		
		
		
		
		
		