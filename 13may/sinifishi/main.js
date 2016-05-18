var myColor = ["Red","Green","White","Black"];
 var a = myColor.join();
document.write(a+ "<br>");
var b= myColor.join("+");

document.write(b);



/*2  sdelat eto s for*/
var arr1 = [3,8,7,6,5,-4,-3,2,1];



function compare(a, b) {
  return a - b;
}
arr1.sort(compare);
document.write("<br>"+arr1+"<br/>");


/*3*/

var array = [1,2,3,4,5,6];
	/*3.1*/
var newNumbFunc = array.reduce(function(num, sum){
	return num + sum;
});
document.write("<br>"+newNumbFunc);
			/*3.2*/
			function newNum(a,b){
				return a+b;
				
			}
			var bum=array.reduce(newNum);

			document.write("<br>"+bum);/*Pocemu ona nerabotayet,sprosit u ucitelya?*/


  
/*4*/

var student = {
	name : "David Rayy",
	sclass: "V|",
	rollono:12 }
//document.write("<br>"+Object.getOwnPropertyNames(student));
   var propName=Object.keys(student);
	document.write("<br>"+propName);
	
	



/*5*/


var x = 32243;
var y = x.toString().split("").reverse() .join("");

console.log(y);

