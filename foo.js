
$(function(){
  $("*").mouseup(function(){
    var selected = window.getSelection().toString();
    if(!selected) return;
    console.log(selected);
  });
})
