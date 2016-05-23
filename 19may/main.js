var olculer =function(radius){
	
	this.border_radius=radius
	
	
}

var rengler = function(color,shadow){
	
	this.background_color=color,
	this.box_shadow=shadow
		
}


var form = function(width,height){
	
	this.width=width;
	this.height=height;
	
}

form.prototype = new rengler("red", 0);
rengler.prototype = new olculer(5);
var circle = new form(50,50);
var olcucicle=new olculer(25,3);

console.log(circle);
console.log(rengler);
console.log(form);



/*var circle = new form(50, 50);
circle.prototype = new olculer(20, 20);
console.log(circle.prototype.border_radius);

*/
document.write("<div style = 'width:"+ olcucicle.width+ "px; "+"height:"+ olcucicle.height +"px; "+"background-color:"+circle.background_color+";" + "border-radius:"+olcucicle.radius +"px;'>");

