$(document).ready(function(){
  createLink();
});

function clearForm() {
  $('#link-title').val('');
  $('#link-url').val('');
}

function createLink () {
  $('#create-link').on('click', function () {
    var linkParams = {
      title: $('#link-title').val().substring(0, 15),
      url: $('#link-url').val().substring(0, 75)
    };
  $.ajax({
      type: 'POST',
      url:  '/api/v1/links',
      data: linkParams,
      success: function(newLink) {
        showLink(newLink);
        clearForm();
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });

}
