//Just handling how to show and hide the blocks

var controlShow = document.querySelectorAll('.control-show')[0];
var controlHide = document.querySelectorAll('.control-hide')[0];
//elements is for the classes your targeting and toggleClass is for the classes you are removing
var blockToggle = function(elements, toggleClass) {

  var blockArray = document.querySelectorAll(elements);
  //Checks through the array of block--fill and removes the hide or includes it
  //It won't remove all the blocks in the array since I'm only checking if greater than 0
  for(var i =  blockArray.length - 1; i > 0; i--) {
    if(blockArray[i].classList.contains('block--hide') && toggleClass) {
      blockArray[i].classList.remove('block--hide');
      return;
    } else if(!blockArray[i].classList.contains('block--hide') && !toggleClass){
      blockArray[i].classList.add('block--hide');
      return;
    }

  }

};

controlShow.addEventListener('click', function() {
  blockToggle('#flavin-controls .block--fill', true);
});

controlHide.addEventListener('click', function() {
  blockToggle('#flavin-controls .block--fill', false);
});
