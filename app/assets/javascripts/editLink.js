$(document).ready(function(){
  editLink();
});

function editLink() {
  $('.links-list').delegate('#edit-link', 'click', function () {
    var $link = $(this).parents('.link')
    var $linkId = parseInt($(this).parents('.link').attr('link-id'));

    var titleField = $(this).closest('.link').find('#link-title');
    var urlField = $(this).closest('.idea').find('#link-url');
    var editButton = $(this);

    titleField.toggle();
    urlField.toggle();
    editButton.toggle();

    $link.prepend(editForm());

    $link.delegate('#save-changes', 'click', function() {
      var editParams = {
        title: $(this).parents().find('#edit-title').val(),
        url : $(this).parents().find('#edit-url').val()
      };

      $.ajax({
        type: 'PUT',
        data: editParams,
        url:  '/api/v1/links/' + $linkId,
        success: function() {
          editButton.toggle();
          $('#save-changes').closest('.container').hide();
          urlField.toggle();
          urlField.text(editParams.url);
          titleField.toggle();
          titleField.text(editParams.title);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });

    });

  });
}
