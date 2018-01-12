'use strict';

function newPopupButton(value, onclick) {
  return $('<input>', {
    type: 'button',
    class: 'uplus_popupMenuButton',
    value: value,
    on: { click: onclick },
  });
}

function searchNewTab(query) {
  window.open(`https://www.google.com/search?q=${query}`, '_blank');
}

$(() => {
  html = $('html');
  body = $('body');
  body.mouseup((e) => {
    const selected = document.getSelection();
    const str = selected.toString();
    if (!str || /^\s+$/.test(str)) return;

    // Copy selected text to clipboard
    document.execCommand('copy', false, null);

    const uplus_popupMenu = $('#uplus_popupMenu');
    if (uplus_popupMenu.css('display') === 'none') {
      uplus_popupMenu.css('display', 'block');
    }

    console.log(e.pageX);
    console.log(e.pageY);
    console.log(selected);

    uplus_popupMenu.css('left', e.pageX + 20);
    uplus_popupMenu.css('top', e.pageY - 40);
  });

  // bodyより後だからいける
  html.mouseup(() => {
    const selected = window.getSelection();
    if (selected.toString()) { return; }

    const uplus_popupMenu = $('#uplus_popupMenu');
    if (uplus_popupMenu.css('display') !== 'none') { uplus_popupMenu.css('display', 'none'); }
  });

  popup = $('<div>', {
    id: 'uplus_popupMenu',
    height: '30px',
    css: {
      // dynamic
      display: 'none',
      // dumy
      left: '320px',
      top: '400px',
    },
  });

  popup.append(newPopupButton('Search', () => { searchNewTab(document.getSelection().toString()); }));
  popup.append(newPopupButton('Go', () => { window.open(document.getSelection().toString(), '_blank'); }));
  // popup.append(newPopupButton('ABC', function(){ alert('ABCDEFG')}));

  $('body').append(popup);
});
