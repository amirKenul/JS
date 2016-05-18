

for (i=0; i<20; i ++){
	
		
		
		if (i==20){
			document.write(i +"<br>");
			break;
		
		}else if (i<=5){
			document.write(i +"<br>");
			continue;
		
		}else if (i>9 && i<16){
			
			document.write(i +"<br>");
			continue;
		}
		
		
	
}


/*
var x = 0;
  outerloop:
    for(;;) {
    x++;
    innerloop:
    for(var y = 0; y < 10; y++) {
      if (x =7 ) break outerloop;  // quit outer loop
      if (y > 3) break;             // Quit the innermost loop
      if (x == 2) break innerloop;  // Do the same thing
      if (x == 4) continue outerloop;  // new outer loop test
      if ((x >= 7) && (x < 9)) continue;  // new inner loop test
      document.write("x = " + x + " y = " + y + "<br>");
    }
  }
  */
  
  var array1 = [0,0,20];// clearInrterval
  
  function myTimer(){
	  
	  document.open();
	  document.write("<br>"+ array1[0]+":"+array1[1]+":"+array1[2]);
	  document.close();
			if (array1[2]==0){
				if (array1[1]==0){
					if(array1[0]==0){
						
						document.write ("don't stop me now");
						clearInrterval(stop);
						
					}
					array1[0]--;
					array1[1]=60;
					
				}
				array1[1]--;
				array1[2]=60;
				
			}
			array1[2]--;
	  
  }
  

  
  var stop= setInterval(function(){myTimer()},1000);
  
 /* function stop (){
	  myTimer();
  }*/
  
  
  

