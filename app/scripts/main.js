//Just handling how to show and hide the blocks

var controlShow = document.querySelectorAll('.control-show')[0];
var controlHide = document.querySelectorAll('.control-hide')[0];

controlShow.addEventListener('click', function() {

});

controlHide.addEventListener('click', function() {

});

var blockToggle = function(element) {
  var blockArray = document.querySelectorAll('#flavin-controls .block--fill');

  for(var i = 0, blockLength = blockArray.length; i < blockLength; i++) {
    blockArray[i].classList.contains('.block--hide');
  };
};
