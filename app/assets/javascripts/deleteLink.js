$(document).ready(function(){
  deleteLink();
});

function deleteLink() {
  $('.links-list').delegate('#delete-link', 'click', function () {
    var $link = $(this).parents('.link')
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));

    $.ajax({
      type: 'DELETE',
      url:  '/api/v1/links/' + $linkId,
      success: function() {
        $link.remove();
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });

}
