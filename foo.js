function newPopupButton(value, onclick){
}

$(function(){
  html = $('html');
  body = $('body');
  body.mouseup(function(){
    var selected = window.getSelection();
    if(!selected.toString())
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
  // 位置変更
  // do not focusable

  popup = $("<div>", {
    id: 'uplus_popupMenu',
    height: '40px',
    css: {position: 'absolute', 'z-index': 2147483647, left: '320px', top: '400px', display: 'none'}
  });

  popup.append($('<input>',{
    type: 'button',
    'class': 'uplus_popupMenuButton',
    value: 'Search',
    on: {
      click: function(){
        window.open('https://www.google.com/search?q='+document.getSelection().toString(), '_blank');
      }
    }
  }));

  popup.append($('<input>',{
    type: 'button',
    value: 'ABC',
    height: '100%',
    on: {
      click: function(){
        alert('Clicked');
      }
    }
  }));

  $('body').append(popup);
})
