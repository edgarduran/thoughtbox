$(document).ready(function () {
  allLinks();
});

function showLink(link) {
  $('.links-list').append(individualLink(link));
}

function allLinks() {
  $.ajax({
    type: 'GET',
    url: 'api/v1/links',
    success: function (links) {
      $.each(links, function (index, link) {
        showLink(link);
      })
    }
  });
}
