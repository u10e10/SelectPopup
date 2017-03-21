
$(function(){
  body = $('body')
  body.mouseup(function(){
    var selected = window.getSelection();
    if(!selected.toString())
      return;

    // Copy selected text to clipboard
    document.execCommand('Copy', false, null);

    var popupMenu = $('#popupMenu');
    if(popupMenu.css('display') == 'none')
      popupMenu.css('display', 'block');
    else
      return;
  });

  body.mousedown(function(){
    var selected = window.getSelection();
    if(selected.toString())
      return;

    var popupMenu = $('#popupMenu');
    if(popupMenu.css('display') != 'none')
      popupMenu.css('display', 'block');
  });

  // not focusable
  popup = $("<div>", {
    id: 'popupMenu',
    height: '40px',
    css: {position: 'absolute', 'z-index': 2147483647, left: '320px', top: '400px', display: 'none'}
  });

  popup.append($('<input>',{
    type: 'button',
    value: 'Search',
    height: '100%',
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

  // style sheetをmanifestで指定する

  console.log(popup.toString());
  $('body').append(popup);
})

// 予め挿入しておいて enable <> disable
// 位置変更
// ハンドリングを止める1度で止める必要がある
// unfocusで削除
// ボタンをクリックしたら停止
