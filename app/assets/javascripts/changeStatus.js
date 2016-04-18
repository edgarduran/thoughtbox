$(document).ready(function(){
  markRead();
  markUnread();
});

function markRead() {
  $('.links-list').delegate('#mark-read', 'click', function () {
    var $link = $(this).parents('.link')
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));
    var status = $(this).parents().find('#status').text();

    if (status === false) {
      var newStatus = true;
    } else {
      var newStatus = false;
    }

    $.ajax({
      type: 'PUT',
      data: {status: newStatus},
      url:  '/api/v1/links/' + $linkId,
      success: function() {
        $link.find('#status').text(newStatus);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });
}

function markUnread() {
  $('.links-list').delegate('#mark-unread', 'click', function () {
    var $link = $(this).parents('.link')
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));
    var status = $(this).parents().find('#status').text();

    if (status === true) {
      var newStatus = false;
    } else {
      var newStatus = true;
    }

    $.ajax({
      type: 'PUT',
      data: {status: newStatus},
      url:  '/api/v1/links/' + $linkId,
      success: function() {
        $link.find('#status').text(newStatus);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });
}
