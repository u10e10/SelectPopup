function newPopupButton(value, onclick){
  return $('<input>',{
    'type': 'button',
    'class': 'uplus_popupMenuButton',
    'value': value,
    'on': { 'click': onclick }
  });
}

function searchNewTab(query){
  window.open('https://www.google.com/search?q='+query, '_blank');
}

$(function(){
  html = $('html');
  body = $('body');
  body.mouseup(function(){
    var selected = document.getSelection();
    var str = selected.toString();
    if(!str || /^\s+$/.test(str))
      return;

    // Copy selected text to clipboard
    document.execCommand('Copy', false, null);

    var uplus_popupMenu = $('#uplus_popupMenu');
    if(uplus_popupMenu.css('display') != 'none')
      return;

    // console.log(selected)
    // uplus_popupMenu.css
    uplus_popupMenu.css('display', 'block');
  });

  // bodyより後だからいける
  html.mouseup(function(){
    var selected = window.getSelection();
    if(selected.toString())
      return;

    var uplus_popupMenu = $('#uplus_popupMenu');
    if(uplus_popupMenu.css('display') != 'none')
      uplus_popupMenu.css('display', 'none');
  });

  // style sheetをmanifestで指定する
    // ボタンぽさを出す
    // ページに依っては上書きされる
  // 位置変更
  // do not focusable

  popup = $("<div>", {
    'id': 'uplus_popupMenu',
    'height': '40px',
    'css': {
      // dynamic
      'display': 'none',
      // dumy
      'left': '320px',
      'top': '400px',
    }
  });

  popup.append(newPopupButton('Search', function(){ searchNewTab(document.getSelection().toString())}))
  popup.append(newPopupButton('ABC', function(){ alert('ABCDEFG')}));

  $('body').append(popup);
})
