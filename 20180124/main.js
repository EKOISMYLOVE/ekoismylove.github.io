/**
 * 
 * @authors EKOISMYLOVE (elyismylove@gmail.com)
 * @date    2018-01-24 15:56:29
 * @version 1
 */

document.onkeydown = function(){
    var keycode = event.which || event.keyCode;
    document.getElementById("inputSpace").innerHTML = String.fromCharCode(keycode);
    document.getElementById("inputCode").innerHTML = "KeyCode is : " + keycode;

}


