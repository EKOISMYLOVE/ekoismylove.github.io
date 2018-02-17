/**
 * 
 * @authors EKOISMYLOVE (elyismylove@gmail.com)
 * @date    2018-02-17 
 * @version 1.1
 */
deg2rad = Math.PI / 180;
spc = 360 / 10;
var angle = 0;
var angles = [];
var counts = [];
for(var i=0; i<10; i++){
	angles.push(angle);
	counts.push(0);
	angle+=spc;
}
for(var i=0; i<10; i++){
	angles.push(angle);
	counts.push(25);
	angle+=spc;
}

function loading(){
	for(var i=0; i<20; i++){
		document.body.innerHTML += '<div id=circle'+i+'></div>';
	}
	loop();
}
function loop(){
	for(var i=0; i<angles.length; i++){
		var circle = document.getElementById("circle"+i);
		circle.style.top = window.innerHeight/2 + counts[i]*Math.cos(angles[i]*deg2rad) + 'px';
		circle.style.left = window.innerWidth/2 + counts[i]*Math.sin(angles[i]*deg2rad) + 'px';
	
		if(angles[i]<0){
			angles[i]=360;
		}
	
		if(i<10){
			angles[i]++; 
			if(counts[i]<200){
				counts[i]+=0.5;
			}
		}

		if(i>9){
			angles[i]--; 
			if(counts[i]<400){
				counts[i]++;
			}
		}
	}
	var T = setTimeout("loop()",10);
}

