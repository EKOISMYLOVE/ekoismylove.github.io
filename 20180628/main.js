var count = 0;


var loadFile = function(event) {
  if (count<3) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('kai'+count);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  count++;
}




