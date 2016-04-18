$(document).ready(function(){
  markRead();
  markUnread();
});

var readStatus = {
  read: true,
  unread: false
};

var unreadStatus = {
  undread: false,
  read: true
};

function markRead() {
  $('.links-list').delegate('#mark-read', 'click', function() {
    var $link    = $(this).parents('.link');
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));
    var status = $link.find('#link-read');
    var statusText = status.text();
    var data = { read: readStatus[statusText] };

    $.ajax({
      type: 'PUT',
      url: '/api/v1/links/' + $linkId,
      data: data,
      success: function() {
        status.text(readStatus[statusText]);
      }
    })
  })
};

function markUnread() {
  $('.links-list').delegate('#mark-unread', 'click', function() {
    var $link    = $(this).parents('.link');
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));
    var status = $link.find('#link-read');
    var statusText = status.text();
    var data = { read: unreadStatus[statusText] };

    $.ajax({
      type: 'PUT',
      url: '/api/v1/links/' + $linkId,
      data: data,
      success: function() {
        status.text(unreadStatus[statusText]);
      }
    })
  })
};
