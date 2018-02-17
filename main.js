/**
 * 
 * @authors ${EKOISMYLOVE} (${elyismylove@gmail.com})
 * @date    2018-01-18
 * @version $Id$
 */

function test(){	
	setTime();
}

function setTime(){
	var T = new Date();
	var hours = ('0'+ T.getHours()).substr(-2);
	var minutes = ('0'+ T.getMinutes()).substr(-2);
	var seconds = ('0'+ T.getSeconds()).substr(-2);

	document.getElementById("time").innerHTML = "Now Time is : " + hours + ":" + minutes + ":" + seconds;	
	var t=setTimeout("setTime()",500);
}
