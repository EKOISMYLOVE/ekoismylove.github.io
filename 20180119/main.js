/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-19 14:33:30
 * @version $Id$
 */


var RGB = 00000000;


function loadColor(){
	var ctx = document.getElementById("Color").getContext("2d");

	for (var i = 0; i < 256; i++) {
    	for (var j = 0; j < 256; j++) {
    		ctx.fillStyle = setColor();
      		ctx.fillRect(j , i , 2, 2);
    	}
  	}
}
	
function setColor(){

	RGBplusZero = plusZero(RGB.toString(16),6);
	RGBtoHex = "#" + RGBplusZero;
	RGB++;
	return(RGBtoHex);

}

function plusZero(str,lenght){
	if(str.length >= lenght){
		return str;
	}
	else{
		return plusZero("0" +str,lenght);
	}
}