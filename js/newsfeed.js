$('#SearchBar').on('focus' , function(){
    $(this).css('width' , '350px');
    $('.searchBox').css('width' , '450px');
});

$('#SearchBar').on('focusout' , function(){
  $(this).css('width' , '200px');
  $('.searchBox').css('width' , '350px');
});



$('#NavShow').on('click' , function(){
  $('#NavShow').css('display' , 'none');
  $('#NavHide').css('display' , 'block');
  $('.sideMenu').css('margin-left' , '-230px');
  $('.contentArea').css('width' , '97%');
});
$('#NavHide').on('click' , function(){
  $('#NavShow').css('display' , 'block');
  $('#NavHide').css('display' , 'none');
  $('.sideMenu').css('margin-left' , '0px');
  $('.contentArea').css('width' , 'calc(100% - 300px)');
});
